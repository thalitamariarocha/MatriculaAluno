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
import { NavbarComponent } from './componentes/itens/navbar/navbar.component';
import { EditalComponent } from './Edital/componente/edital/edital.component';
import { MainLayoutComponent } from './componentes/layout/main-layout/main-layout.component';
import { HeaderComponent } from './componentes/layout/header/header.component';
import { ListarEditalComponent } from './Edital/componente/listar-edital/listar-edital.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ValidationComponent,
    HomeComponent,
    NavbarComponent,
    EditalComponent,
    MainLayoutComponent,
    HeaderComponent,
    ListarEditalComponent

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
