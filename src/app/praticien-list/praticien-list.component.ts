import { Component } from '@angular/core';
import { Praticien } from '../models/praticien';
import {PraticienComponent} from '../praticien/praticien.component';
import {GsbService} from '../service/gsb.service';
import { randomUUID } from 'crypto-browserify';

@Component({
  selector: 'app-praticien-list',
  standalone: true,
  imports: [PraticienComponent],
  templateUrl: './praticien-list.component.html',
  styleUrl: './praticien-list.component.scss'
})
export class PraticienListComponent {
  praticiens!: Praticien[
    ];
  id!: String;

  constructor(private gsbService: GsbService) {
    this.id=crypto.randomUUID().substring(0, 8);
  }
  ngOnInit() {
    this.praticiens = this.gsbService.getPraticiens();
  }
}

