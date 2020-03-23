import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {AuthService} from '../../services/auth/auth.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {BtnComponent} from '../btn/btn.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent, BtnComponent ],
      providers: [AuthService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should includes login btn', () => {
    component.login = null;
    let de = fixture.debugElement.query(By.css('app-btn'));
    let el = de.nativeElement;
    expect(el).toBeDefined();
  });
});
