import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'ngx-edit-me-ckeditor',
  template: `
    <ckeditor
      [editor]="Editor"
      [(ngModel)]="data"
      (ngModelChange)="data = $event && dataChange.next($event)"
    ></ckeditor>
  `
})
export class EditorComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();
  Editor = ClassicEditor;

  @ViewChild('editor') editor: CKEditorComponent;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
