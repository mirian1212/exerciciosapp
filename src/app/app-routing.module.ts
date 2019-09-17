import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { ExercicioComponent } from './componentes/exercicio/exercicio.component';
import { LoginecadastroComponent } from './componentes/loginecadastro/loginecadastro.component';
import { SugestoesComponent } from './/componentes/sugestoes/sugestoes.component';
import { ListarPage } from './/componentes/cadastro/listar/listar.page';
import { ListarSugestoesComponent } from './componentes/sugestoes/listar-sugestoes/listar-sugestoes.component';
import {BarrigaComponent} from './componentes/barriga/barriga.component';
import {PernasComponent} from './componentes/pernas/pernas.component';
import {SugestoesSalvarComponent} from './componentes/sugestoes/sugestoes-salvar/sugestoes-salvar.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'exercicio', component: ExercicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'loginecadastro', component: LoginecadastroComponent },
  { path: 'sugestoes', component: SugestoesComponent },
  { path: 'listar', component: ListarPage },
  { path: 'sugestoes-salvar', component: SugestoesSalvarComponent},
  { path: 'listar-sugestoes', component: ListarSugestoesComponent },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'cidade-salvar', loadChildren: './cidade/cidade-salvar/cidade-salvar.module#CidadeSalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/cidade-listar/cidade-listar.module#CidadeListarPageModule' },
  { path: 'estado-salvar', loadChildren: './estado/estado-salvar/estado-salvar.module#EstadoSalvarPageModule' },
  { path: 'estado-listar', loadChildren: './estado/estado-listar/estado-listar.module#EstadoListarPageModule' },
  { path: 'exercicioss', loadChildren: './exercicioss/exercicioss.module#ExerciciossPageModule' },
  { path: 'listar', loadChildren: './exercicioss/listar/listar.module#ListarPageModule' },
  { path: 'salvar', loadChildren: './exercicioss/salvar/salvar.module#SalvarPageModule' },
  { path: 'barriga', component : BarrigaComponent},
  {path: 'pernas', component: PernasComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
