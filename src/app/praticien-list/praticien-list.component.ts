import { Component } from '@angular/core';
import {Praticien} from '../models/praticien';

@Component({
  selector: 'app-praticien-list',
  standalone: true,
  imports: [],
  templateUrl: './praticien-list.component.html',
  styleUrl: './praticien-list.component.scss'
})
export class PraticienListComponent {
  praticiens!: Praticien[];
  ngOnInit() {
    this.praticiens = [
      new Praticien('https://www.w3schools.com/howto/img_avatar2.png', 'Smith', 'Anna', '10 rue de la Santé', '75001', 'Paris', 'À visiter'),
      new Praticien('https://www.w3schools.com/howto/img_avatar.png', 'Brown', 'James', '20 rue de la Médecine', '75002', 'Paris', 'À visiter'),
      new Praticien('https://www.w3schools.com/howto/img_avatar3.png', 'Johnson', 'Emily', '30 rue des Hôpitaux', '75003', 'Paris', 'Déjà visité'),
    ];
  }
}

