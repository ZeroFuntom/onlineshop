import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './createUser.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: CreateUserComponent }
    ]),
    SharedModule
  ],
  declarations: [
    CreateUserComponent
  ],
  providers: [
  ]
})
export class UserModule { }
