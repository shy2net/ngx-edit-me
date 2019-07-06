import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  imports: [CommonModule, CKEditorModule, FormsModule],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditMeCKEditorModule {}
