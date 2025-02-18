import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../modules/material/material.module";
import {MatTableDataSource} from "@angular/material/table";
import {UserDTO} from "../../models/user-dto";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'paterno', 'materno'];
  // dataSource = ;

  dataSource: MatTableDataSource<UserDTO> = new MatTableDataSource([]);

  constructor(private api: ApiService) {
  }

  async ngOnInit() {
    this.dataSource.data = await this.api.ExecuteApiCall<UserDTO[]>('https://webapiazuretestegg.azurewebsites.net/api/User/GetUsers', null);
    console.log(this.dataSource.data);
  }
}
