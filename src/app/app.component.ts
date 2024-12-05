import {Component, OnInit} from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {PraticienComponent} from './praticien/praticien.component';
import{Praticien} from './models/praticien';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticienComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent implements OnInit {
  ngOnInit() {
  }

}
