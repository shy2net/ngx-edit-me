import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'ngx-edit-me-ckeditor',
  template: `
    <ckeditor [editor]="Editor" [(ngModel)]="ngModel"></ckeditor>
  `
})
export class EditorComponent implements OnInit, OnChanges {
  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter<any>();
  Editor = ClassicEditor;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('ngModel' in changes) {
      this.ngModelChange.emit(this.ngModel);
    }
  }
}
