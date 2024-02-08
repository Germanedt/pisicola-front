import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExpense, IListExpensesRequest } from 'src/app/models/Expenses.model';
import { IListSowingRequest, ISowing } from 'src/app/models/Sowing.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SowingService } from 'src/app/services/sowing.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detalle-unidad',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.less'],
})
export class DetalleUnidadComponent implements OnInit {
  sowings: ISowing[] = [];
  hasActions = true;
  expensesList: IExpense[] = [];
  constructor(
    public router: Router,
    public dataService: SessionDataService,
    public sowingService: SowingService,
    public expensesService: ExpensesService
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
        this.sowings = response.data;
      });
  }
  loadExpenses() {
    const params: IListExpensesRequest = {
      page: 0,
      perPage: 0
    }
    this.expensesService
      .listExpenses(params, this.dataService.productiveUnit.id)
      .subscribe((response) => {
        this.expensesList = response.data;
      });

  }
  goToEditExpeses(expense: IExpense) {
    const state = { expense };
    this.router.navigate(['modificarGasto'], { state });
  }
  formatFullDate(dateString:string) {
    return moment(dateString).format(
      'YYYY-MM-DD hh:mm a'
    )
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
}
