import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  standalone: true,
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent {
  isActive = true;

  colors = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'gray']

  position = 0;

  changeBackground() { 
    document.body.style.backgroundColor = this.colors[this.position]; //Define a cor de fundo da página usando a cor atual do array
    this.position = (this.position + 1) % this.colors.length; //Avança para a próxima posição no array de cores, se chegar ao fim, volta para a primeira cor automaticamente
  }

}