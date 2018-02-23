import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public hobbylist: IHobby[];
  public list: IPerson[];
  public hobbyperson: IHobbyPerson[];

  constructor(appService: AppService) {
    appService.getPeople().do((list) => {
      this.list = list;
    }).subscribe();

    appService.getHobbies().do((hobbylist) => {
      this.hobbylist = hobbylist;
    }).subscribe();

    appService.getHobbiesPeople().do((hobbyperson) => {
      this.hobbyperson = hobbyperson;
    }).subscribe();
  }

}
