import { Routes } from '@angular/router';
import {EggCardComponent} from "./egg-card/egg-card.component";
import {InitComponent} from "./init/init.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full",
  },
  {
    component: InitComponent,
    path: "inicio"
  },
  {
    component: EggCardComponent,
    path: "shibas"
  },

];
