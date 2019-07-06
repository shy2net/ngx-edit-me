import { EditableEvent } from './editable-event';

export interface EditableFunction {
  html: string;
  type: string;
  clickListener: (EditableEvent) => Promise<any> | void;
}
