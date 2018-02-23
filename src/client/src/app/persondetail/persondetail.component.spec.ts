import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PersondetailComponent } from './persondetail.component';
import { PersondetailService } from './persondetail.service';

describe('PersondetailComponent', () => {
  let component: PersondetailComponent;
  let fixture: ComponentFixture<PersondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        PersondetailComponent
      ],
      providers: [
        PersondetailService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
