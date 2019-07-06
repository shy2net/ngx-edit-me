import { TemplateRef, InjectionToken } from '@angular/core';

import { EditableEvent } from './editable-event';
import { EditableFunction } from './editable-function';

export interface NgxEditMeModuleConfigurations {
  htmlEditor?: TemplateRef<any>;
  inlineEditor?: TemplateRef<any>;
  saveListener?: (event: EditableEvent) => Promise<any>;
  editableFunctions?: EditableFunction[];
}

export const NgxEditMeModuleConfigurationsService = new InjectionToken<NgxEditMeModuleConfigurations>(
  'NgxEditMeModuleConfigurations'
);
