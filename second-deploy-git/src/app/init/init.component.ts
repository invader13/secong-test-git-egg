import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {routes} from "../app.routes";

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss'
})
export class InitComponent {
  title = 'second-deploy-git';

  constructor(private router: Router) {
  }


  async ClickShibas(){
    await this.router.navigate(['/shibas']);
   };
}
