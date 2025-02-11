import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [],
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss'
})
export class InitComponent {
  title = 'second-deploy-git';

  constructor(private router: Router) {
  }


   GetRoute(){
    return `${window.location.origin}/shibas`
   };
}
