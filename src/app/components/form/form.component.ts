import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name: string = '';
  idade: string = '';
  linguagem: string = '';
  frase1: boolean = false;
  frase2: boolean = false;
  resposta: string = '';
  like: string = '';

  enviar() {
    this.frase1 = true;
  }
  enviar2() {
    this.frase2 = true;
    this.resposta = this.answer(this.like);
  }

  answer(value: string) {
    if (value === '1') {
      return '1 > Muito bom! Continue estudando e você terá muito sucesso.';
    } else {
      return '2 > Ahh que pena... Já tentou aprender outras linguagens?';
    }
  }
}
