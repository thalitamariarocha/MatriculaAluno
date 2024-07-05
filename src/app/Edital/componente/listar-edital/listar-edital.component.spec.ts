import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEditalComponent } from './listar-edital.component';

describe('ListarEditalComponent', () => {
  let component: ListarEditalComponent;
  let fixture: ComponentFixture<ListarEditalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEditalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEditalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
