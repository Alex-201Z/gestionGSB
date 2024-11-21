import {Component, OnInit} from '@angular/core';
import{Praticien} from '../models/praticien';
@Component({
  selector: 'app-praticien',
  standalone: true,
  imports: [ ],
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {
  imageUrl!: string;
  nom!: string;
  prenom!: string;
  adresse!: string;
  cp!: string;
  ville!: string;
  private statut!: string;

  ngOnInit() {
    this.imageUrl = 'https://www.w3schools.com/howto/img_avatar.png';
    this.nom = 'Doe';
    this.prenom = 'John';
    this.adresse = '1 rue des malades';
    this.cp = '75888';
    this.ville = 'Paris';
  }

  onModificationStatut(): void {
    this.statut = this.statut === 'À visiter' ? 'Déjà visité' : 'À visiter';
  }
}
