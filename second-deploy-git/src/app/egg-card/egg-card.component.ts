import { Component } from '@angular/core';
import { MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { Location } from '@angular/common';
import { MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-egg-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './egg-card.component.html',
  styleUrl: './egg-card.component.scss'
})
export class EggCardComponent {
  constructor(private _location: Location) {
  }

  backClicked() {
    this._location.back();
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
