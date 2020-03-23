import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LoginFormComponent} from './login-form.component';
import {InputComponent} from '../input/input.component';
import {BtnComponent} from '../btn/btn.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule, By} from '@angular/platform-browser';
import {AuthService} from '../../services/auth/auth.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ModalRef} from '../../classes/modal-ref';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckboxComponent} from '../checkbox/checkbox.component';
import {validationMessage} from '../../utils/validationMessage';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let loginInput, passwordInput, authBtn: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent, InputComponent, BtnComponent, CheckboxComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [AuthService, HttpClient, HttpHandler, ModalRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();

    loginInput = el.querySelector('[formcontrolname=login]');
    passwordInput = el.querySelector('[formcontrolname=password]');
    authBtn = el.querySelector('app-btn[text=Войти]');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Форма инициализирована правильно', () => {
    it('Создано поле login', () => {
      expect(loginInput).toBeDefined();
    });
    it('Создано поле password', () => {
      expect(loginInput).toBeDefined();
    });
    it('Есть кнопка Войти', () => {
      expect(loginInput).toBeDefined();
    });
    it('Кнопка входа неактивна', () => {
      expect(authBtn.classList.contains('btn--disabled'));
    });
  });

  describe('Валидация', () => {
    it('Поле login невалидно при пустом значении', () => {
      expect(loginInput.classList.contains('ng-invalid')).toBeTruthy();
    });
    it('Поле password невалидно при пустом значении', () => {
      expect(loginInput.classList.contains('ng-invalid')).toBeTruthy();
    });
    it('У поля login выводится ошибка при пустом значении', () => {
      component.formGroup.get('login').setValue('');
      component.formGroup.get('login').markAsTouched();
      fixture.detectChanges();
      const loginFormGroup = loginInput.closest('.form__group');
      const loginError = loginFormGroup.querySelector('.form__error');
      expect(loginError.textContent).toEqual(validationMessage.required);
    });
    it('У поля password выводится ошибка при пустом значении', () => {
      component.formGroup.get('password').setValue('');
      component.formGroup.get('password').markAsTouched();
      fixture.detectChanges();
      const passwordFormGroup = passwordInput.closest('.form__group');
      const passwordError = passwordFormGroup.querySelector('.form__error');
      expect(passwordError.textContent).toEqual(validationMessage.required);
    });
    it('Поле login валидно при непустом значении', () => {
      component.formGroup.get('login').setValue('some login');
      fixture.detectChanges();
      expect(component.formGroup.get('login').valid).toBeTruthy();
    });
    it('Поле password валидно при непустом значении', () => {
      component.formGroup.get('password').setValue('some password');
      fixture.detectChanges();
      expect(component.formGroup.get('password').valid).toBeTruthy();
    });
    it('Кнопка войти активна при валидных данных', () => {
      component.formGroup.get('login').setValue('some login');
      component.formGroup.get('password').setValue('some password');
      fixture.detectChanges();
      expect(component.isAuthBtnDisabled()).toBeFalsy();
    });
  });
  describe('Авторизация', () => {
    beforeEach(() => {
      component.formGroup.get('login').setValue('some login');
      component.formGroup.get('password').setValue('some password');
      fixture.detectChanges();
    });
  });
  it('Корректно передает данные в аргументы сервиса', () => {
    spyOn(component.authService, 'login');
    authBtn.click();
    expect(component.authService.login).toHaveBeenCalledWith({login: 'some login', password: 'some password', fingerPrint: 'asdf'});
  });
});
