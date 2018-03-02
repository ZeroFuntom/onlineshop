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
    public hobbylist: IHobby[];

    public constructor(private route: ActivatedRoute, appService: AppService) {
        this.route.paramMap.subscribe((params: ParamMap) =>
            this.id = +params.get('id'));

        appService.getHobbies().subscribe((hobbylist) => {
            this.hobbylist = hobbylist;
        });
    }

    public get getHobby(): string {
       const hobby = this.hobbylist.find( h => h.Id === this.id );
       return hobby.HobbyName;
    }
}
