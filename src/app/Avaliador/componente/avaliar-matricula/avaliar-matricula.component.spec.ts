import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarMatriculaComponent } from './avaliar-matricula.component';

describe('AvaliarMatriculaComponent', () => {
  let component: AvaliarMatriculaComponent;
  let fixture: ComponentFixture<AvaliarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
