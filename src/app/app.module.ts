import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {LoginComponent} from './componentes/login/login.component';
import {SobreComponent} from './componentes/sobre/sobre.component';
import {ExercicioComponent} from './componentes/exercicio/exercicio.component';
import {CalendarioComponent} from './componentes/calendario/calendario.component';
import {LoginecadastroComponent} from './componentes/loginecadastro/loginecadastro.component';
import { FormsModule } from '@angular/forms';
import { SugestoesComponent } from './componentes/sugestoes/sugestoes.component';
import {ListarPage} from './/componentes/cadastro/listar/listar.page';
import {ListarSugestoesComponent} from './componentes/sugestoes/listar-sugestoes/listar-sugestoes.component';
import {BarrigaComponent} from './componentes/barriga/barriga.component';
import {PosturaComponent} from './componentes/postura/postura.component';
import {PernasComponent} from './componentes/pernas/pernas.component';
import {SugestoesSalvarComponent} from './componentes/sugestoes/sugestoes-salvar/sugestoes-salvar.component';

@NgModule({
  declarations: [AppComponent, CadastroComponent, LoginComponent, ExercicioComponent, CalendarioComponent,
    SobreComponent, LoginecadastroComponent, SugestoesComponent, ListarPage, ListarSugestoesComponent, BarrigaComponent, PernasComponent, SugestoesSalvarComponent, PosturaComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCkbmaOawLWV7VlFboPfAOt1DbrfFf0p4c",
        authDomain: "exercicios-5d643.firebaseapp.com",
        databaseURL: "https://exercicios-5d643.firebaseio.com",
        projectId: "exercicios-5d643",
        storageBucket: "exercicios-5d643.appspot.com",
        messagingSenderId: "327384361915",
        appId: "1:327384361915:web:b370501dad9462de"
    }), AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
