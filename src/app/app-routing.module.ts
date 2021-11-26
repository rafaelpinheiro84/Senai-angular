import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';
import { PcgamesComponent } from './views/pcgames/pcgames.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jogos", component: JogosComponent },
  { path: "pcgames", component:PcgamesComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
