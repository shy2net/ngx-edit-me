import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EditableComponent } from './components/editable/editable.component';
import { EditableDirective } from './directives/editable.directive';

@NgModule({
  declarations: [EditableComponent, EditableDirective],
  imports: [CommonModule, CKEditorModule, FormsModule],
  entryComponents: [EditableComponent],
  exports: [EditableDirective, EditableComponent]
})
export class NgxEditMeModule {}
