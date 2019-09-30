import { Component } from '@angular/core';
import { Pessoa } from './entidade/pessoa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../../cidade/entidade/cidade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.scss']
})

export class CadastroComponent {
  endereco: string
  cadastro: Pessoa = new Pessoa();
  cidade: Cidade = new Cidade();
  total: Number;
  resultado= Number;

  listaEstado: Observable<Estado[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
}
  ngOnInit() { }
 Cadastro() {
    this.fire.list('estado').push(this.cadastro);
    this.cadastro = new Pessoa();
    this.rota.navigate(['salvar']);
 }
  Salvar() {
    this.fire.list('cadastro').push(this.cadastro);
    this.cadastro = new Pessoa();
    this.rota.navigate(['cadastro']);
    alert('Salvo com sucesso! Agora escolha a opção de treino');
  }
  Proximo(){
  this.rota.navigate([this.endereco]);
}
  Calculo(){
    let resultado= Number(this.cadastro.altura) * Number(this.cadastro.altura);
    let total= Number(this.total);
    let peso= Number(this.cadastro.peso);
    total= peso/ resultado;

    if(this.total < 18){
      alert("O Indice"+ total + "está abaixo do indicado" );
    }
  }
  
}
