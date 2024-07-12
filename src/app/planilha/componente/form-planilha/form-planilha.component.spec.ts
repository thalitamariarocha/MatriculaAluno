import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlanilhaComponent } from './form-planilha.component';

describe('FormPlanilhaComponent', () => {
  let component: FormPlanilhaComponent;
  let fixture: ComponentFixture<FormPlanilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlanilhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlanilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
