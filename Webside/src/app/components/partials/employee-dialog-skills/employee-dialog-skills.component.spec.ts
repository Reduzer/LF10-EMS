import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDialogSkillsComponent } from './employee-dialog-skills.component';

describe('EmployeeDialogSkillsComponent', () => {
  let component: EmployeeDialogSkillsComponent;
  let fixture: ComponentFixture<EmployeeDialogSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDialogSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDialogSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
