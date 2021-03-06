import { EditableEventType } from './editable-event-type';
import { EditableComponent } from '../components/editable/editable.component';

export interface EditableEvent {
  eventType: EditableEventType;
  element: HTMLElement;
  editableComponent: EditableComponent;
  editedContent: string;
}
