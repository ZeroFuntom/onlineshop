import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersondetailComponent } from './persondetail.component';
import { PersondetailService } from './persondetail.service';

const routes: Routes = [
  {
    path: '/Persondetail',
    component: PersondetailComponent,
  },
  {path: 'Persondetail', component: PersondetailComponent}
];

@NgModule({
  declarations: [
        PersondetailComponent
    ],
  imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  exports: [
        RouterModule,
    ],
  providers: [
        PersondetailService
    ]
})
export class PersondetailRoutingModule {
}
