import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescourseComponent } from './rescourse.component';

describe('RescourseComponent', () => {
  let component: RescourseComponent;
  let fixture: ComponentFixture<RescourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
