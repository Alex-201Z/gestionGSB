import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PraticienComponent} from './praticien/praticien.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticienComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
