import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageTwoComponent} from './page-two/page-two.component';
import {PageThreeComponent} from './page-three/page-three.component';
import {AppComponent} from './app.component';
import {PageOneComponent} from './page-one/page-one.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent
  },
  {
    path: 'page2',
    component: PageTwoComponent
  },
  {
    path: 'page3',
    component: PageThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
