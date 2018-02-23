import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersondetailComponent } from './persondetail.component';

const routes: Routes = [
  {
    path: '',
    component: PersondetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PersondetailRoutingModule {
}
