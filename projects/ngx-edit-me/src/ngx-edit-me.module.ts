import { CommonModule } from '@angular/common';
import { NgModule, TemplateRef, InjectionToken, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EditableComponent } from './components/editable/editable.component';
import { EditableDirective } from './directives/editable.directive';
import { EditableService } from './editable.service';
import { EditableEvent } from './models/editable-event';

export interface NgxEditMeModuleConfigurations {
  htmlEditor?: TemplateRef<any>;
  inlineEditor?: TemplateRef<any>;
  saveListener?: (event: EditableEvent) => Promise<any>;
}

export const NgxEditMeModuleConfigurationsService = new InjectionToken<NgxEditMeModuleConfigurations>(
  'NgxEditMeModuleConfigurations'
);

@NgModule({
  declarations: [EditableComponent, EditableDirective],
  imports: [CommonModule, CKEditorModule, FormsModule],
  entryComponents: [EditableComponent],
  exports: [EditableDirective, EditableComponent]
})
export class NgxEditMeModule {
  static forRoot(config: NgxEditMeModuleConfigurations): ModuleWithProviders {
    return {
      ngModule: NgxEditMeModule,
      providers: [
        ,
        EditableService,
        {
          provide: NgxEditMeModuleConfigurationsService,
          useValue: config
        }
      ]
    };
  }
}
