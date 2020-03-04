import {Component, ComponentRef, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements OnInit, ControlValueAccessor {

  @Input() multiple = false;
  @Input() accept = '';
  @Input() canAppend = true;
  @Input() canDelete = true;
  @Input() disabled = false;
  @Input() set files(files: File[]) {
    this._files = files;
    this.propagateChange(files);
  }
  get files() {
    return this._files;
  }

  @ViewChild('file')
  fileInput: ElementRef;

  _files: File[] = [];


  get canAppendFile() {
    return !this.disabled && this.canAppend;
  }
  get canDeleteFile() {
    return !this.disabled && this.canDelete;
  }

  propagateChange = (_: any) => {};
  onTouch = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(files: File[]): void {
    this.files = files;
  }

  onAddFile() {
    this.fileInput.nativeElement.click();
  }

  appendFiles(files: FileList) {
    if (this.multiple) {
      this.files = this.files.concat(...Array.from(files));
    } else {
      this.files = Array.from(files);
    }
    this.onTouch(null);
  }

  delete(deletingFile: File) {
    this.files = this.files.filter((file) => file !== deletingFile);
    this.onTouch(null);
  }


  // todo не добавляется подряд один файл
}
