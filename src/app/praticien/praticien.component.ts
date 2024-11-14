import {Component, Input} from '@angular/core';
import{Praticien} from '../models/praticien';
@Component({
  selector: 'app-praticien',
  standalone: true,
  imports: [ ],
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent {
  @Input() praticien!: Praticien;
}
onModificationStatut() {
  this.praticien.onMoficationStatut()
}
