import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-show',
  imports: [],
  templateUrl: './signal-show.component.html',
  styleUrl: './signal-show.component.css'
})
export class SignalShowComponent {
  counter = 0;
  signalCounter = signal(0);

  increment() {
    this.counter++;
    this.signalCounter.set(this.signalCounter() + 1);
  }
}
