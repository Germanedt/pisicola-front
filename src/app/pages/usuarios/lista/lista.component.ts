import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isAdmin: boolean = true;
  constructor(
    public dataService: SessionDataService,
    private usersService: UsersService,
    private router: Router
  ){
  }
  public handlerConfirmDelete(userId: number){
    this.usersService.deleteUser(userId).subscribe((response: any) =>{
      if (response) {
        this.loadData();
      }
    });
  }
  public goToEdit(user: IUser) {
    const state = {user};
    this.router.navigate(['/modificarUsuario'], { state });
  }
  public goToChangePass(user: IUser){
    const state = {user};
    this.router.navigate(['/cambiarClaveUsuario'], { state });
  }
  public loadData() {
    const params: IListUsersRequest = {
      page: 1,
      perPage: 20,
    }
    if (this.dataService.productiveUnit) {
      params.productiveUnitId = this.dataService.productiveUnit.id;
    }
    this.usersService.listUsers(params).subscribe((response: IListUsersResponse) =>{
      this.listOfData = response.data;
    });
  }
  ngOnInit(): void {
    this.loadData();
    this.isAdmin = this.dataService.getUserData().user_type_id === 1;
  }
}
