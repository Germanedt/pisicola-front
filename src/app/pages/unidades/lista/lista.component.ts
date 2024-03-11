import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  IListProductiveUnitRequest,
  IListProductiveUnitResponse,
  IProductiveUnit,
} from 'src/app/models/ProductiveUnit.model';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-lista-unidades',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaUnidadesComponent implements OnInit {
  listOfData: IProductiveUnit[] = [];
  constructor(
    public dataService: SessionDataService,
    private service: ProductiveUnitService,
    private router: Router,
    private alertController: AlertController 
  ) {}
  public async handlerConfirmDelete(userId: number) {
    const alert = await this.alertController.create({
      header: '¿Seguro desea eliminar la unidad productiva?', 
      buttons: [
        {
          text: 'Ok', 
          handler: () => {
            this.service.deleteProductiveUnit(userId).subscribe((response: any) => {
              if (response) {
                window.location.reload;
              }
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', 
        },
      ], 
    });
    await alert.present();
  }
  public goToShow(productiveUnit: IProductiveUnit) {
    this.dataService.setProductiveUnit(productiveUnit);
    this.router.navigate(['/detalleUnidad']);
  }
  public goToEdit(productiveUnit: IProductiveUnit) {
    const state = { productiveUnit };
    this.router.navigate(['/modificarUnidad'], { state });
  }
  ngOnInit(): void {}
  
  ionViewWillEnter(): void {
    const params: IListProductiveUnitRequest = {
      page: 1,
      perPage: 10,
      includeDeletes: true,
    };
    this.service
      .listProductiveUnits(params)
      .subscribe((response: IListProductiveUnitResponse) => {
        this.listOfData = response.data;
        if (this.listOfData.length === 1) {
          this.goToShow(this.listOfData[0]);
        }
      });
  }
}
