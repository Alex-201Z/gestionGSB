import {Injectable} from '@angular/core';
import {Praticien} from '../models/praticien';

@Injectable({
  providedIn: 'root'
})
export class GsbService {
  private praticiens: Praticien[] = [
    new Praticien('https://www.w3schools.com/howto/img_avatar2.png', 'Smith', 'Anna', '10 rue de la Santé', '75001', 'Paris', 'À visiter'),
    new Praticien('https://www.w3schools.com/howto/img_avatar.png', 'Brown', 'James', '20 rue de la Médecine', '75002', 'Paris', 'À visiter'),
    new Praticien('https://www.w3schools.com/howto/img_avatar3.png', 'Johnson', 'Emily', '30 rue des Hôpitaux', '75003', 'Paris', 'Déjà visité'),
  ];

  getPraticiens() : Praticien[] {
    return [...this.praticiens];
  }
}
