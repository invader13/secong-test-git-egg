import { Component } from '@angular/core';
import {MatCard, MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-egg-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './egg-card.component.html',
  styleUrl: './egg-card.component.scss'
})
export class EggCardComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
