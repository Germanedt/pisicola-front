import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; //1. Importar el AlertController
import {
  IListUsersRequest,
  IListUsersResponse,
  IUser,
} from 'src/app/models/User.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaUsuariosComponent implements OnInit {
  listOfData: IUser[] = [];
  isAdmin: boolean = true;
  constructor(
    public dataService: SessionDataService,
    private usersService: UsersService,
    private router: Router,
    private alertController: AlertController //2. Definirlo en el constructor
  ) {}
  // 3. Cambiar la a funcion a asyncrona (async)
  public async handlerConfirmDelete(userId: number) {
    /**
     * 4. Definir una constante llamado alert y asignarle la respuesta del metodo create de la clase alertController proveniente del constructor.
     */
    const alert = await this.alertController.create({
      header: '¿Seguro desea eliminar el usuario?', //Le agrega un encabezado al alert
      buttons: [
        //Crea 2 botones
        {
          text: 'Ok', //Texto del boton
          handler: () => {
            //Funcion de confirmacion
            //Agrega el metodo o la funcion correspondiente, puede ser eliminar o cancelar.
            this.usersService.deleteUser(userId).subscribe((response: any) => {
              if (response) {
                this.loadData();
              }
            });
          },
        },
        //Boton de cancelar
        {
          text: 'Cancelar', //Texto del boton
          role: 'cancel', //Role del boton es cancelar.
        },
      ],
    });

    //Llamar el alert
    await alert.present();
  }
  public goToEdit(user: IUser) {
    const state = { user };
    this.router.navigate(['/modificarUsuario'], { state });
  }
  public goToChangePass(user: IUser) {
    const state = { user };
    this.router.navigate(['/cambiarClaveUsuario'], { state });
  }
  public loadData() {
    const params: IListUsersRequest = {
      page: 1,
      perPage: 20,
    };
    if (this.dataService.productiveUnit) {
      params.productiveUnitId = this.dataService.productiveUnit.id;
    }
    this.usersService
      .listUsers(params)
      .subscribe((response: IListUsersResponse) => {
        this.listOfData = response.data;
      });
  }

  ngOnInit(): void {}

  ionViewWillEnter(): void {
    this.loadData();
    this.isAdmin = this.dataService.getUserData().user_type_id === 1;
  }
}
