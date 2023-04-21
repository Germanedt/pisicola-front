import { Component, OnInit } from '@angular/core';
import { IListUsersRequest, IListUsersResponse, IUser } from 'src/app/models/User.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaUsuariosComponent implements OnInit{
  listOfData: IUser[] = [];
  constructor(
    public dataService: SessionDataService,
    private usersService: UsersService
  ){
  }
  ngOnInit(): void {
    const params: IListUsersRequest = {
      page: 1,
      perPage: 10
    }
    this.usersService.listUsers(params).subscribe((response: IListUsersResponse) =>{
      this.listOfData = response.data;
    });
    
  }
}
