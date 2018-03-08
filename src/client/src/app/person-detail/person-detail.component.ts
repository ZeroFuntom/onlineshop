import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './person-detail.component.html',
    styles: [`./person-detail.component.css`],
})

export class PersonDetailComponent {
    public id: number;

    public isBusyHobby: boolean = true;
    public isBusyPerson: boolean = true;

    public person: IPerson;
    public hobbylist: IHobby[] = [];

    public constructor(private route: ActivatedRoute, appService: AppService) {
        this.route.paramMap.subscribe((params: ParamMap) =>
            this.id = +params.get('id'));

        appService.getPerson(this.id).subscribe((person) => {
            this.person = person;
            this.isBusyPerson = false;
        });
        appService.getHobbies().subscribe((hobbylist) => {
            this.hobbylist = hobbylist;
            this.isBusyHobby = false;
        });
    }

    public get isBusy(): boolean {
        return this.isBusyHobby || this.isBusyPerson;
    }

    public get getHobby(): string {
       const hobby = this.hobbylist.find( h => h.Id === this.id );
       if (hobby !== undefined) {
           return hobby.HobbyName;
       }
       return 'Ooops, nichts gefunden';
    }
}
