import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {ModalComponent} from '../../components/modal/modal.component';
import {ModalConfig} from '../../classes/modal-config';
import {ModalInjector} from '../../classes/modal-injector';
import {ModalRef} from '../../classes/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalComponentRef: ComponentRef<ModalComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public open(componentType: Type<any>, config: ModalConfig) {
    const modalRef = this.appendModalComponentToBody(config);

    this.modalComponentRef[this.modalComponentRef.length - 1].instance.childComponentType = componentType;

    return modalRef;
  }

  public close(component?: ComponentRef<ModalComponent>) {
    const modalToClose = component
      ? this.modalComponentRef.find(c => c === component)
      : this.modalComponentRef[this.modalComponentRef.length - 1];
    this.removeModalComponentFromBody(modalToClose);
    this.modalComponentRef = this.modalComponentRef.filter(c => c !== modalToClose);
  }

  appendModalComponentToBody(config: ModalConfig) {
    const map = new WeakMap();
    map.set(ModalConfig, config);

    const modalRef = new ModalRef();
    map.set(ModalRef, modalRef);

    const sub = modalRef.afterClosed.subscribe(() => {
      console.log('sub after closed');
      this.removeModalComponentFromBody(modalRef.component);
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = componentFactory.create(new ModalInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);


    componentRef.instance.title = config.title;



    modalRef.component = componentRef;

    this.modalComponentRef.push(componentRef);

    return modalRef;
  }

  private removeModalComponentFromBody(component: ComponentRef<ModalComponent>) {
    this.appRef.detachView(component.hostView);
    component.destroy();
  }
}
