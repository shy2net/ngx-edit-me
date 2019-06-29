import { TemplateRef, InjectionToken } from '@angular/core';

import { EditableEvent } from './editable-event';

export interface NgxEditMeModuleConfigurations {
  htmlEditor?: TemplateRef<any>;
  inlineEditor?: TemplateRef<any>;
  saveListener?: (event: EditableEvent) => Promise<any>;
}

export const NgxEditMeModuleConfigurationsService = new InjectionToken<NgxEditMeModuleConfigurations>(
  'NgxEditMeModuleConfigurations'
);
