import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {Sugestoes} from '../entidade/sugestoes';

@Component({
  selector: 'app-sugestoes-salvar',
  templateUrl: './sugestoes-salvar.component.html',
  styleUrls: ['./sugestoes-salvar.component.scss'],
})
export class SugestoesSalvarComponent implements OnInit {
 sugestoes: Sugestoes= new Sugestoes()

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {}

  Sugerir(){
    if(this.sugestoes.sugestoes == null){
      alert("Não foi possível salvar sua sugestão");

    }
    else{
    this.banco.list('sugestoes').push(this.sugestoes);
    this.sugestoes = new Sugestoes();
    this.rota.navigate (['listar-sugestoes']);
    alert('Salvo com sucesso!');
  }
  }

 }
