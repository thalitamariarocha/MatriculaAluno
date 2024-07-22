import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoAlunoComponent } from './acesso-aluno.component';

describe('AcessoAlunoComponent', () => {
  let component: AcessoAlunoComponent;
  let fixture: ComponentFixture<AcessoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
