import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalShowComponent } from "./signal/signal-show/signal-show.component";
import { ThreeMethodComponent } from "./signal/three-method/three-method.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalShowComponent, ThreeMethodComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test-app';
}
