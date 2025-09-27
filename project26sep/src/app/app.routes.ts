import { Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { DragonBallComponent } from './pages/dragonball/dragonball';
import { DragonBallSuperComponent } from './pages/dragonballsuper/dragonballsuper';
export const routes: Routes = [
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'dragonball',
    component: DragonBallComponent
  },
  {
    path: 'dragonballsuper',
    component: DragonBallSuperComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
