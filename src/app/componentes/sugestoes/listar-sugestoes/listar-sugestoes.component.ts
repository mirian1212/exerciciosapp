import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Sugestoes } from '../entidade/sugestoes';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import {SugestoesSalvarComponent} from '../sugestoes-salvar/sugestoes-salvar.component';

'../cadastro-salvar/cadastro-salvar.component';
@Component({
  selector: 'app-listar-sugestoes',
  templateUrl: './listar-sugestoes.component.html',
  styleUrls: ['./listar-sugestoes.component.scss'],
})
export class ListarSugestoesComponent implements OnInit {
  listaUsuario: Observable<Sugestoes[]>;
  listaFiltro: Sugestoes[];
  filtro = {}; //regras ativas do filtro
  sugestoes: any;
  valor: string;

  constructor(private banco: AngularFireDatabase, private modal: ModalController) {
    this.listaUsuario = this.banco.list<Sugestoes>('sugestoes').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))))
  }

  ngOnInit() {
    this.listaUsuario.subscribe(sugestoes => {
      this.sugestoes = sugestoes;
      this.listaFiltro = _.filter(this.sugestoes, _.conforms(this.filtro));
    })
   }
  excluir(key) {
    this.banco.list('sugestoes').remove(key);
    alert("Excluido");
  }
  filtrar() {
    this.filtro['sugestoes'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.sugestoes, _.conforms(this.filtro));
  }

  async alterar(sugestoes) {
    const tela = await this.modal.create({
      component: SugestoesSalvarComponent , componentProps: {sugestoes: sugestoes}
    });
    tela.present();
  }
}
