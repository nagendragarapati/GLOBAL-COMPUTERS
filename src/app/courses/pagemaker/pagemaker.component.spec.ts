import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagemakerComponent } from './pagemaker.component';

describe('PagemakerComponent', () => {
  let component: PagemakerComponent;
  let fixture: ComponentFixture<PagemakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagemakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
