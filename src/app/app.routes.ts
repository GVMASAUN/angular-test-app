import { Routes } from '@angular/router';
import { SignalShowComponent } from './signal/signal-show/signal-show.component';
import { ThreeMethodComponent } from './signal/three-method/three-method.component';
import { ParentComponent } from './signal/signal-input/parent/parent.component';

export const routes: Routes = [
    { path: 'method', component: ThreeMethodComponent },
    { path: 'input', component: ParentComponent },
    { path: '**', component: SignalShowComponent },
];
