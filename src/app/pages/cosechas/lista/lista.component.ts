import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import {
  IListSowingRequest,
  IListSowingResponse,
  ISowing,
} from 'src/app/models/Sowing.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-lista-cosechas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaCosechaComponent {
  listOfData: ISowing[] = [];

  constructor(
    public router: Router,
    public service: SowingService,
    public dataService: SessionDataService,
    private alertController: AlertController
  ) {
  }

  public loadData() {
    const params: IListSowingRequest = {
      page: 1,
      perPage: 10,
      includeClosed: false,
    };
    this.service
      .listSowings(params, this.dataService.productiveUnit.id)
      .subscribe((response: IListSowingResponse) => {
        this.listOfData = response.data;
      });
  }
  public async handlerConfirmDelete(id: number) {

    const alert = await this.alertController.create({
      header: '¿Seguro desea eliminar la cosecha?', 
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.service.deleteSowing(id).subscribe((response) => {
              if (response) {
                this.loadData();
              }
            });
          },
        },
        {
          text: 'Cancelar', 
          role: 'cancel', 
        },
      ]
    });
    await alert.present();
  }
  public gotTo(sowing: ISowing) {
    const state = { sowing };
    this.router.navigate(['/detallesCosecha'], { state });
  }
  public goToEdit(sowing: ISowing) {
    const state = {
      productiveUnit: this.dataService.productiveUnit,
      sowing,
    };
    this.router.navigate(['/modificarCosecha'], { state });
  }
  public handlerConfirmClose(sowingId: number) {
    this.service.closeSowing(sowingId).subscribe((response) => {
      if (response) {
        console.log(response);
        this.loadData();
      }
    });
  }
  ngOnInit(): void {}
  ionViewWillEnter(): void {
    this.loadData();
  }
  public getJSON(item: ISowing) {
    return JSON.stringify(item, null, 2);
  }
}
