import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RequestMethod, Http, Headers, RequestOptions } from '@angular/http';
import { post } from 'selenium-webdriver/http';
import { and } from '@angular/router/src/utils/collection';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
    templateUrl: './create-new.component.html',
    styles: [`./create-new.component.css`],
})

export class CreateNewComponent {

    public CreateNewPerson: string = '';
    public CreateNewHobby: string = '';

    public saveValue(AppService: AppService) {
        console.log(this.CreateNewPerson);
        console.log(this.CreateNewHobby);
    }
}
