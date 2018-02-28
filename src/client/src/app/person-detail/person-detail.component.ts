import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './person-detail.component.html',
    styles: [`./person-detail.component.css`],
})

export class PersonDetailComponent {
    public id: string;

    public constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe((params: ParamMap) =>
            this.id = params.get('id'));
    }
}
