import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllEmployeesComponent } from './fetch-all-employees.component';

describe('FetchAllEmployeesComponent', () => {
  let component: FetchAllEmployeesComponent;
  let fixture: ComponentFixture<FetchAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchAllEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
