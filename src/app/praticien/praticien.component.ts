import {Component, Input, OnInit} from '@angular/core';
import{Praticien} from '../models/praticien';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
@Component({
  selector: 'app-praticien',
  standalone: true,
  imports: [TitleCasePipe,UpperCasePipe,LowerCasePipe],
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent  {
  @Input() praticien!: Praticien;

  onModificationStatut(): void {
    this.praticien.statut = this.praticien.statut === 'À visiter' ? 'Déjà visité' : 'À visiter';
  }
}
