import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: "atualizar/:id", component: AtualizarComponent},
  { path: "", component: ListarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }