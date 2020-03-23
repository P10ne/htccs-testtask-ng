import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.btn'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Тип fill по умолчанию', () => {
    expect(el.classList).toContain('btn--fill');
  });

  it('Тип fill при type = fill', () => {
    component.type = 'fill';
    fixture.detectChanges();
    expect(el.classList).toContain('btn--fill');
  });

  it('Тип text при type = text', () => {
    component.type = 'text';
    fixture.detectChanges();
    expect(el.classList).toContain('btn--text');
  });

  it('Выводится текст из @Input text', () => {
    const btnInputText = 'Нажми меня';
    component.text = btnInputText;
    fixture.detectChanges();
    expect(el.querySelector('.btn__text').textContent).toContain(btnInputText);
  });

  it('Отображается индикатор загрузки при @Input wait = true', () => {
    component.wait = true;
    fixture.detectChanges();
    expect(el.classList.contains('btn--wait')).toBeTruthy();
    // todo тест стиля display у btn__preloader
  });

  it('Кнопка не активна при disabled = true', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(el.classList.contains('btn--disabled')).toBeTruthy();
    const styles = getComputedStyle(el);
    expect(isBtnNotActive(el)).toBeTruthy();
  });

  it('Кнопка не активна при wait = true', () => {
    component.wait = true;
    fixture.detectChanges();
    const styles = getComputedStyle(el);
    expect(isBtnNotActive(el)).toBeTruthy();
  });

  it('Кнопка не эмитит click при wait = true', () => {
    component.wait = true;
    fixture.detectChanges();
    spyOn(component.onClick, 'emit');
    el.click();
    expect(component.onClick.emit).not.toHaveBeenCalled();
  });

  it('Не эмитит click, если disabled = true', () => {
    component.disabled = true;
    fixture.detectChanges();
    spyOn(component.onClick, 'emit');
    el.click();
    expect(component.onClick.emit).not.toHaveBeenCalled();
  });
});

function isBtnNotActive(btn: HTMLElement): boolean {
  const styles = getComputedStyle(btn);
  return styles.cursor === 'default' && Number(styles.opacity) < 1;
}

// todo перенести повторяющийся код в beforeEach
