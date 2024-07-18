import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './componentes/validation/validation.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditalComponent } from './Edital/componente/edital/edital.component';
import { MainLayoutComponent } from './componentes/layout/main-layout/main-layout.component';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { ListarEditalComponent } from './Edital/componente/listar-edital/listar-edital.component';
import { LoginComponent } from './Login/componente/login/login.component';
import { FormUsuarioComponent } from './Login/componente/form-usuario/form-usuario.component';
import { ListarUsuarioComponent } from './Login/componente/listar-usuario/listar-usuario.component';
import { FormPlanilhaComponent } from './planilha/componente/form-planilha/form-planilha.component';
import { FormAlunoComponent } from './Aluno/componente/form-aluno/form-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ValidationComponent,
    HomeComponent,
    EditalComponent,
    MainLayoutComponent,
    HeaderComponent,
    ListarEditalComponent,
    LoginComponent,
    FormUsuarioComponent,
    ListarUsuarioComponent,
    FormPlanilhaComponent,
    FormAlunoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //esse e o debaixo são importações para usar o formulario
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
