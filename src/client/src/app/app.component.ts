import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public list: IPerson[];

  constructor(appService: AppService) {
    appService.getPeople().do((list) => {
      this.list = list;
    }).subscribe();
  }
}
