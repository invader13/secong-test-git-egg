import { Routes } from '@angular/router';
import {EggCardComponent} from "./egg-card/egg-card.component";
import {InitComponent} from "./init/init.component";
import {UsersListComponent} from "./users-list/users-list.component";

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
  {
    component: UsersListComponent,
    path: "users-list"
  },

];
