import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExpense, IListExpensesRequest } from 'src/app/models/Expenses.model';
import { IListSowingRequest, ISowing } from 'src/app/models/Sowing.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SowingService } from 'src/app/services/sowing.service';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-unidad',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleUnidadComponent implements OnInit {
  sowings: ISowing[] = [];
  hasActions = true;
  expensesList: IExpense[] = [];
  constructor(
    public router: Router,
    public dataService: SessionDataService,
    public sowingService: SowingService,
    public expensesService: ExpensesService,
    public alertController: AlertController
  ) {}
  public goTo(route: string) {
    this.router.navigate([route]);
  }
  loadDataSowings() {
    const params: IListSowingRequest = {
      page: 0,
      perPage: 0,
    };
    this.sowingService
      .listSowings(params, this.dataService.productiveUnit.id)
      .subscribe((response) => {
        console.log('Cosechas', response.data);
        this.sowings = response.data;
      });
  }
  loadExpenses() {
    const params: IListExpensesRequest = {
      page: 0,
      perPage: 0,
    };
    this.expensesService
      .listExpenses(params, this.dataService.productiveUnit.id)
      .subscribe((response) => {
        console.log('Gastos', response.data);
        this.expensesList = response.data;
      });
  }
  goToEditExpeses(expense: IExpense) {
    const state = { expense };
    this.router.navigate(['modificarGasto'], { state });
  }
  formatFullDate(dateString: string) {
    return moment(dateString).format('YYYY-MM-DD hh:mm a');
  }
  public handlerConfirmDelete(id: number) {
    this.expensesService.deleteExpense(id).subscribe((response) => {
      if (response) {
        this.loadExpenses();
      }
    });
  }
  ngOnInit(): void {
    this.loadDataSowings();
    this.loadExpenses();
  }

  /** Eventos de las cosechas */
  public async handlerConfirmDeleteHarvest(id: number) {
    const alert = await this.alertController.create({
      header: '¿Seguro desea eliminar la cosecha?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.sowingService.deleteSowing(id).subscribe((response) => {
              if (response) {
                this.loadDataSowings();
              }
            });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
  public gotToHarvest(sowing: ISowing) {
    const state = { sowing };
    this.router.navigate(['/detallesCosecha'], { state });
  }
  public goToEditHarvest(sowing: ISowing) {
    const state = {
      productiveUnit: this.dataService.productiveUnit,
      sowing,
    };
    this.router.navigate(['/modificarCosecha'], { state });
  }
  public async handlerConfirmCloseHarvest(sowingId: number) {
    const alert = await this.alertController.create({
      header: '¿Seguro desea cerrar la cosecha?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.sowingService.closeSowing(sowingId).subscribe((response) => {
              if (response) {
                this.loadDataSowings();
              }
            });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  /** Eventos de los gastos */
  public async handlerConfirmDeleteExpense(id: number) {
    const alert = await this.alertController.create({
      header: '¿Seguro desea eliminar el gasto?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.expensesService.deleteExpense(id).subscribe((response) => {
              if (response) {
                this.loadExpenses();
              }
            });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
  public goToEditExpense(expense: IExpense) {
    const state = { expense };
    this.router.navigate(['modificarGasto'], { state });
  }
}
