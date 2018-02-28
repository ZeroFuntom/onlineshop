import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { PersonListComponent } from './person-list/person-list.component';
import { PersondetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersondetailComponent
  ],
  providers: [
    AppService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PersonListComponent },
      { path: 'detail/:id', component: PersondetailComponent }
    ]),
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
