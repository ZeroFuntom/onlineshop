import { NgModule, ErrorHandler } from '@angular/core';
import { PersondetailComponent } from './persondetail.component';
import { PersondetailService } from './persondetail.service';
import { PersondetailRoutingModule } from './persondetail-routing.module';

@NgModule({
  imports: [
    PersondetailRoutingModule
  ],
  declarations: [
    PersondetailComponent
  ],
  providers: [
    PersondetailService,
    { provide: ErrorHandler, useClass: PersondetailService },
  ],
})

export class PersondetailModule { }
