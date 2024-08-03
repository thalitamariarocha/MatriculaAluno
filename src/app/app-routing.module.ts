import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './componentes/layout/main-layout/main-layout.component';
import { EditalComponent } from './Edital/componente/edital/edital.component';
import { ListarEditalComponent } from './Edital/componente/listar-edital/listar-edital.component';
import { LoginComponent } from './Login/componente/login/login.component';
import { FormUsuarioComponent } from './Login/componente/form-usuario/form-usuario.component';
import { ListarUsuarioComponent } from './Login/componente/listar-usuario/listar-usuario.component';
import { AuthGuard } from './Login/service/auth.guard';
import { FormPlanilhaComponent } from './planilha/componente/form-planilha/form-planilha.component';
import { FormAlunoComponent } from './Aluno/componente/form-aluno/form-aluno.component';
import { ListaMatriculaComponent } from './Avaliador/componente/lista-matricula/lista-matricula.component';
import { EnviarEmailComponent } from './planilha/componente/enviar-email/enviar-email.component';
import { AcessoAlunoComponent } from './Aluno/componente/acesso-aluno/acesso-aluno.component';
import { AvaliarMatriculaComponent } from './Avaliador/componente/avaliar-matricula/avaliar-matricula.component';
import { AvaliadorGuard } from './Login/service/avaliador.guard';

const routes: Routes = [
  
  // Adicione outras rotas aqui
  {path: 'carregaraluno/:id_aluno', component: FormAlunoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acessoAluno', component: AcessoAlunoComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}, // Redireciona rotas desconhecidas para a raiz

  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
       { path: 'edital', component: EditalComponent, canActivate: [AuthGuard] },
       { path: 'carregaredital/:id', component: EditalComponent, canActivate: [AuthGuard] },
       { path: 'listarEdital', component: ListarEditalComponent, canActivate: [AuthGuard]},
       { path: 'usuario', component: FormUsuarioComponent, canActivate: [AuthGuard]},
       { path: 'editarUsuario/:id_usuario', component: FormUsuarioComponent, canActivate: [AuthGuard]},
       { path: 'listarUsuario', component: ListarUsuarioComponent, canActivate: [AuthGuard]},
       { path: 'importPlanilha', component: FormPlanilhaComponent, canActivate: [AuthGuard]},
       { path: 'enviaremail/:id_edital', component: EnviarEmailComponent, canActivate: [AuthGuard]},
       { path: 'avaliarMatricula/:id_aluno', component: AvaliarMatriculaComponent, canActivate: [AvaliadorGuard]},
       { path: 'listarMatricula', component: ListaMatriculaComponent, canActivate: [AvaliadorGuard]},
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
