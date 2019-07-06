import { EditMeCKEditorModule } from './edit-me-ckeditor.module';

describe('EditMeCKEditorModule', () => {
  let editMeCKEditorModule: EditMeCKEditorModule;

  beforeEach(() => {
    editMeCKEditorModule = new EditMeCKEditorModule();
  });

  it('should create an instance', () => {
    expect(editMeCKEditorModule).toBeTruthy();
  });
});
