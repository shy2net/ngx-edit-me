import { EditableComponent } from './components/editable/editable.component';
import { Subject } from 'rxjs';

import { Inject, Injectable, Input, Output, TemplateRef } from '@angular/core';

import {
  NgxEditMeModuleConfigurations,
  NgxEditMeModuleConfigurationsService
} from './ngx-edit-me.module';

@Injectable({
  providedIn: 'root'
})
export class EditableService {
  @Input() htmlEditor: TemplateRef<any>;
  @Input() inlineEditor: TemplateRef<any>;
  @Input() saveListener: (editable: EditableComponent) => Promise<any>;

  @Output() saved: Subject<EditableComponent> = new Subject<EditableComponent>();
  @Output() editing: Subject<EditableComponent> = new Subject<EditableComponent>();

  constructor(@Inject(NgxEditMeModuleConfigurationsService) private config: NgxEditMeModuleConfigurations) {
    if (config) {
      this.htmlEditor = config.htmlEditor;
      this.inlineEditor = config.inlineEditor;
      this.saveListener = config.saveListener;
    }
  }
}
