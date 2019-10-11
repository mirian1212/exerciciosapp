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
  //  Altura multiplicada por ela mesma
  //  Peso dividido pelo quadrado da altura

  Calculo(){
    let alt = (Number(this.cadastro.altura)* Number (this.cadastro.altura));
    let peso = Number(this.cadastro.peso);
    let total = peso/alt;

    if(total < 18){
      alert("O Indice " + total + " está abaixo do indicado" );
    }
  else if(total >18.5 && total < 24.9){
      alert("O indice "+ total + " está normal" );
  }
  else if (total >25 && total < 29.9 ){
      alert("O indice "+ total + " está em sobrepeso" );
  }
  else if (total >30 && total < 34.9){
      alert("O indice "+ total + " está em obesidade em 1 grau" );
}
  else if (total >35 && total < 39.9){
      alert("O indice "+ total + " está em obesidade de 2 grau" );
  }
  else {
      alert("O indice "+ total + " está em obesidade de 3 grau" );
}
}
}
