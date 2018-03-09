import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { CreateNewComponent } from './create-new/create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    CreateNewComponent
  ],
  providers: [
    AppService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'list', component: PersonListComponent },
      { path: 'detail/:id', component: PersonDetailComponent },
      { path: 'create', component: CreateNewComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' }
    ],
    { enableTracing: false }),
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
