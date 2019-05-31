import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { EditMode } from '../../edit-mode';
import { EditableEvent, EditableEventType } from '../../models';

@Component({
  selector: 'ngx-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input() editableElement: HTMLElement;
  @Input() editMode: EditMode;
  @Input() isActive: boolean;
  @Input() onSave: (event: EditableEvent) => Promise<boolean>;
  @Output() editableEvent: EventEmitter<EditableEvent> = new EventEmitter<EditableEvent>();

  @ViewChild('editableContent') editableContentDiv: ElementRef;
  @ViewChild('inlineEditor') inlineEditor: TemplateRef<HTMLElement>;
  @ViewChild('htmlEditor') htmlEditor: TemplateRef<CKEditorComponent>;

  isLoading: boolean;
  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter<any>();
  Editor = ClassicEditor;
  selectedTemplate: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('editableElement' in changes || 'isActive' in changes) {
      this.updateElement();
    }
    if ('editMode' in changes) {
      this.updateSelectedEditTemplate();
    }
  }

  updateSelectedEditTemplate() {
    if (!this.editMode) {
      this.editMode = EditMode.TEXT;
    }
    switch (this.editMode) {
      case EditMode.HTML:
        this.selectedTemplate = this.htmlEditor;
        break;
      case EditMode.TEXT:
        this.selectedTemplate = this.inlineEditor;
        break;
    }
  }

  getEditableEvent(eventType: EditableEventType, editedContent: string): EditableEvent {
    return {
      eventType,
      element: this.editableElement,
      editableComponent: this,
      editedContent
    };
  }

  ngAfterViewInit(): void {
    this.updateElement();
  }

  ngAfterContentInit(): void {
    this.cdr.reattach();
  }

  onEditClick() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.ngModel = this.editableElement.innerHTML;
    }
  }

  onButtonClick(button: string) {
    const editableEvent = this.getEditableEvent(button as EditableEventType, this.ngModel);

    switch (button) {
      case 'save':
        if (!this.onSave) {
          throw new Error(
            `onSave is not implemented! if you are using ngx-edit-me directive, use ngxEditMeOnSave, if you are using the component use onSave`
          );
        }

        this.isLoading = true;

        this.onSave(editableEvent)
          .then(result => {
            this.isLoading = false;
            if (result) {
              this.editableElement.innerHTML = this.ngModel;
              this.isActive = false;
              this.ngModelChange.next(this.ngModel);
              this.editableEvent.next(editableEvent);
            }
          })
          .catch(err => {
            this.isLoading = false;
            throw err;
          });

        break;
      case 'cancel':
        this.editableEvent.next(editableEvent);
        this.isActive = false;
        break;
    }
  }

  /**
   * Update the element and insert it's content as part of this element contents.
   */
  private updateElement() {
    if (this.editableContentDiv) {
      const editableDiv = this.editableContentDiv.nativeElement;
      editableDiv.innerHTML = ''; // Empty the current content if exists
      editableDiv.appendChild(this.editableElement); // Append the element we are wrapping as a child
      this.updateSelectedEditTemplate();
    }
  }
}
