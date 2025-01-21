import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeViewComponent } from './list-employee-view.component';

describe('ListEmployeeViewComponent', () => {
  let component: ListEmployeeViewComponent;
  let fixture: ComponentFixture<ListEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmployeeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
