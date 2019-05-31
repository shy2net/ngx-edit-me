import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { OnChanges } from '@angular/core';

import { EditableComponent } from '../components/editable/editable.component';
import { EditMode } from '../edit-mode';
import { EditableEvent } from '../models';

@Directive({
  selector: '[ngxEditMe]'
})
export class EditableDirective implements AfterViewInit, OnChanges {
  @Input() ngxEditMe: boolean;
  @Input() ngxEditMeMode: EditMode;
  @Output() ngxEditMeEvent: EventEmitter<EditableEvent> = new EventEmitter<EditableEvent>();
  private editableComponent: ComponentRef<EditableComponent>;

  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    this.createEditableComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('ngxEditMeMode' in changes) {
      this.updateEditableComponent();
    }
  }

  updateEditableComponent() {
    if (!this.editableComponent) {
      return;
    }
    const editableComponent = this.editableComponent.instance;

    if (editableComponent) {
      editableComponent.editMode = this.ngxEditMeMode;
      editableComponent.editableEvent.subscribe(result => {
        this.ngxEditMeEvent.next(result);
      });
    }
  }

  createEditableComponent() {
    // Create the component using the component factory
    const factory = this.componentFactoryResolver.resolveComponentFactory(EditableComponent);
    const elementRef = this.viewContainerRef.createComponent(factory);
    this.editableComponent = elementRef;

    // Attach the editable component as a parent to the current element
    const createdElement = elementRef.location.nativeElement;
    this.el.nativeElement.parentElement.insertBefore(createdElement, this.el.nativeElement);
    // createdElement.appendChild(this.el.nativeElement);
    elementRef.instance.editableElement = this.el.nativeElement;
    this.updateEditableComponent();
  }
}
