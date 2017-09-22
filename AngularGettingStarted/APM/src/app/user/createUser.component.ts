import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    templateUrl: './createUser.component.html',
    styleUrls: ['./createUser.component.css']
})

export class CreateUserComponent {
        public pageTitle: string = 'Create a new User-Profile';
}
