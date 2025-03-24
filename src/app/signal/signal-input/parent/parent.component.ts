import { Component, signal } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  //This is how input works without signals

  // message: string = "Hello from parent component";
  // counter = 1;

  // changeMessageValue() {
  //   this.message = this.message + this.counter;
  // }

  //With signals:

  message = signal('Hello from parent component');
  counter = 1;

  changeMessageValue() {
    this.message.set(this.message() + this.counter);
  }
}
