import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { TestComponent } from "./test/test.component";
import { CopyComponent } from "./copy/copy.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CdkDrag, CdkDragHandle, TestComponent, CopyComponent],
  standalone: true
})
export class AppComponent {

}
