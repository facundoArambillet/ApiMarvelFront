import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTimeComponent } from './request-time.component';

describe('RequestTimeComponent', () => {
  let component: RequestTimeComponent;
  let fixture: ComponentFixture<RequestTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTimeComponent]
    });
    fixture = TestBed.createComponent(RequestTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
