import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PersondetailService } from './persondetail.service';
import { PersondetailModule } from './persondetail.module';

describe('PersondetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        PersondetailModule,
      ],
      providers: [
        PersondetailService,
      ],
    });
  });

  it('should be created', inject([PersondetailService], (service: PersondetailService) => {
    expect(service).toBeTruthy();
  }));
});
