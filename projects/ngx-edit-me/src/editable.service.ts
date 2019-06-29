import { Subject } from 'rxjs';

import { Inject, Injectable, Input, Output, TemplateRef } from '@angular/core';

import { EditableEvent } from './models/editable-event';
import { NgxEditMeModuleConfigurationsService, NgxEditMeModuleConfigurations } from './models';

@Injectable({
  providedIn: 'root'
})
export class EditableService {
  @Input() htmlEditor: TemplateRef<any>;
  @Input() inlineEditor: TemplateRef<any>;
  @Input() saveListener: (event: EditableEvent) => Promise<any>;

  @Output() saved: Subject<EditableEvent> = new Subject<EditableEvent>();

  constructor(@Inject(NgxEditMeModuleConfigurationsService) private config: NgxEditMeModuleConfigurations) {
    if (config) {
      this.htmlEditor = config.htmlEditor;
      this.inlineEditor = config.inlineEditor;
      this.saveListener = config.saveListener;
    }
  }
}
