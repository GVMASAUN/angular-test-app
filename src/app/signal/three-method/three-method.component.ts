import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-three-method',
  imports: [],
  templateUrl: './three-method.component.html',
  styleUrl: './three-method.component.css'
})
export class ThreeMethodComponent {
  firstName = signal('John');
  lastName = signal('Doe');

  constructor() {
    //runs side effects whenever a signal changes.
    //executes a function whenever its dependent signals update
    //so it runs on every signal change.
    effect(() => {
      console.log(`Full name is: ${this.fullName()}`);
    });
  }

  //computed method is the one which creates read-only signal that derives its value from other signals.
  //this automatically recalculates when any dependency signal changes.
  fullName = computed(() => this.firstName() + ' ' + this.lastName());
}
