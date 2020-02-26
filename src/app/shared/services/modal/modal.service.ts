import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {ModalComponent} from '../../components/modal/modal.component';
import {ModalConfig} from '../../classes/modal-config';
import {ModalInjector} from '../../classes/modal-injector';
import {ModalRef} from '../../classes/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalComponentRef: ComponentRef<ModalComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public open(componentType: Type<any>, config: ModalConfig) {
    const modalRef = this.appendModalComponentToBody(config);

    this.modalComponentRef.instance.childComponentType = componentType;

    return modalRef;

  }

  public close() {
    this.removeModalComponentFromBody();
  }

  appendModalComponentToBody(config: ModalConfig) {
    const map = new WeakMap();
    map.set(ModalConfig, config);

    const modalRef = new ModalRef();
    map.set(ModalRef, modalRef);

    const sub = modalRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeModalComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = componentFactory.create(new ModalInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.modalComponentRef = componentRef;

    this.modalComponentRef.instance.onClose.subscribe(() => {
      this.removeModalComponentFromBody();
    });

    return modalRef;
  }

  private removeModalComponentFromBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }
}
