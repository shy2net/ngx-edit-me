import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditableComponent } from './components/editable/editable.component';
import { EditableDirective } from './directives/editable.directive';
import { EditMeCKEditorModule } from './edit-me-ckeditor/edit-me-ckeditor.module';
import { EditableService } from './editable.service';
import { NgxEditMeModuleConfigurations, NgxEditMeModuleConfigurationsService } from './models';

@NgModule({
  declarations: [EditableComponent, EditableDirective],
  imports: [CommonModule, FormsModule, EditMeCKEditorModule],
  entryComponents: [EditableComponent],
  exports: [EditableDirective, EditableComponent]
})
export class NgxEditMeModule {
  static forRoot(config?: NgxEditMeModuleConfigurations): ModuleWithProviders {
    return {
      ngModule: NgxEditMeModule,
      providers: [
        EditableService,
        {
          provide: NgxEditMeModuleConfigurationsService,
          useValue: config
        }
      ]
    };
  }
}
