import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNTableComponent } from './un-table.component';

describe('UNTableComponent', () => {
  let component: UNTableComponent;
  let fixture: ComponentFixture<UNTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UNTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
