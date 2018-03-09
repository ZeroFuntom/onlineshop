import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';

@Component({
  templateUrl: 'person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent {

  public list: IPerson[];

  constructor(appService: AppService) {
    appService.getPeople().do((list) => {
      this.list = list;
    }).subscribe();
  }

}
