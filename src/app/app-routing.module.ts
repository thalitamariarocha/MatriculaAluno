// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { FormsComponent } from './componentes/forms/forms.component';
// import { HomeComponent } from './componentes/home/home.component';
// import { ValidationComponent } from './componentes/validation/validation.component';
// import { EditalComponent } from './Edital/componente/edital/edital.component';
// import { MainLayoutComponent } from './componentes/layout/main-layout/main-layout.component';


// const routes: Routes = [

//   { path: '', component: HomeComponent },
//   { path: 'forms', component: FormsComponent },
//   { path: 'validation', component: ValidationComponent },
//   {path: 'edital', component: EditalComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './componentes/layout/main-layout/main-layout.component';
import { EditalComponent } from './Edital/componente/edital/edital.component';
import { ListarEditalComponent } from './Edital/componente/listar-edital/listar-edital.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
       { path: 'edital', component: EditalComponent },
       { path: 'carregaredital/:id', component: EditalComponent },
       { path: 'listarEdital', component: ListarEditalComponent}
     
      // Adicione outras rotas aqui
    ]
  },
  { path: '**', redirectTo: '' } // Redireciona rotas desconhecidas para a raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
