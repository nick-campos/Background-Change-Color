import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  standalone: true,
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent {
  isActive = true;

  changeBackground() {
    document.body.style.backgroundColor = "red";
  }

}
