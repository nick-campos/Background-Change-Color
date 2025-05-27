import { Component } from '@angular/core';
import { ChangeColorComponent } from "./components/change-color/change-color.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChangeColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Background-Change-Color';
}
