import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor  {

  private _value = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() type = 'text';
  @Input() set value(value) {
    this._value = value;
    this.propagateChange(this._value);
  }
  get value() {
    return this._value;
  }

  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    this.value = obj;
    console.log(this.value);
  }

//  todo fw 500 for placeholder and bold for text
}
