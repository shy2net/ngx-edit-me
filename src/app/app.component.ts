import { Component } from '@angular/core';
import { EditableEvent } from 'ngx-edit-me';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = `This is a simple headline you can edit!`;

  onSave($event: EditableEvent): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}
