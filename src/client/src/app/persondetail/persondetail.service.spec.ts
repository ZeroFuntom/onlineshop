import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { PersondetailComponent } from './persondetail.component';

describe('PersondetailComponent', () => {
  let component: PersondetailComponent;
  let fixture: ComponentFixture<PersondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
            HttpClientModule
        ],
      declarations: [
          PersondetailComponent
        ],
      providers: [
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
