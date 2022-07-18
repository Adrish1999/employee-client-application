import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchEmployeeByIdComponent } from './fetch-employee-by-id.component';

describe('FetchEmployeeByIdComponent', () => {
  let component: FetchEmployeeByIdComponent;
  let fixture: ComponentFixture<FetchEmployeeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchEmployeeByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchEmployeeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
