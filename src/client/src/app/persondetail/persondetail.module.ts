import { NgModule, ErrorHandler } from '@angular/core';
import { PersondetailRoutingModule } from './persondetail-routing.module';
import { PersondetailComponent } from './persondetail.component';
import { PersondetailService } from './persondetail.service';

@NgModule({
  imports: [
    PersondetailRoutingModule,
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
