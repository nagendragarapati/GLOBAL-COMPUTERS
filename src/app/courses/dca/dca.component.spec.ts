import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCAComponent } from './dca.component';

describe('DCAComponent', () => {
  let component: DCAComponent;
  let fixture: ComponentFixture<DCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
