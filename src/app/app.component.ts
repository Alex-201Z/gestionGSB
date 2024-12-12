import {Component, OnInit} from '@angular/core';
import {RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {PraticienComponent} from './praticien/praticien.component';
import{PraticienListComponent} from './praticien-list/praticien-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PraticienListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent implements OnInit {
  ngOnInit() {
  }

}
