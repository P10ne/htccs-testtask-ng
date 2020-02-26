import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  _checked = false;
  @Input() id = 'check';
  @Input() labelText = '';
  @Input() disabled = false;
  set checked(value) {
    this._checked = value;
    this.propagateChange(this._checked);
  }
  get checked() {
    return this._checked;
  }
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {}

  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('set disabled state', isDisabled);
    this.disabled = isDisabled;
  }

  writeValue(obj: boolean): void {
    console.log('write', obj);
    this.checked = obj;
  }

  click() {
    this.checked = !this.checked;
  }

}
