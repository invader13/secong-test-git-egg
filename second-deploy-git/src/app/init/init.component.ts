import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    MatButton, HttpClientModule
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.scss'
})
export class InitComponent {
  title = '';

  constructor(private router: Router, private http: HttpClient) {
    this.consumeApi();
  }

  consumeApi(){
    this.http.get('/api/message')
      .subscribe((resp: any) => this.title = resp.text);
  }

  async ClickShibas(){
    await this.router.navigate(['/shibas']);
   };

  async ClickUsers(){
    await this.router.navigate(['/users-list']);
   };
}
