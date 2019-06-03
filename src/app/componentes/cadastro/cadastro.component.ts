import { Component } from '@angular/core';

@Component({
  selector:'cadastro-component',
  templateUrl:'cadastro.component.html'
})

export class CadastroComponent{
    nome:string;
    email:string;
    senha: number;
    imc: number;
    altura: number;
    sexo: string; 
}
