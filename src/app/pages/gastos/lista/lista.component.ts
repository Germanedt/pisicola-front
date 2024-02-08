import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IExpense,
  IListExpensesRequest,
  IListExpensesResponse,
} from 'src/app/models/Expenses.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaGastosComponent implements OnInit {
  listOfData: IExpense[] = [];
  constructor(
    private router: Router,
    private service: ExpensesService,
    public dataService: SessionDataService
  ) {}
  goToEdit(expense: IExpense) {
    const state = { expense };
    this.router.navigate(['modificarGasto'], { state });
  }
  formatFullDate(dateString:string) {
    return moment(dateString).format(
      'YYYY-MM-DD hh:mm a'
    )
  }
  public handlerConfirmDelete(id: number) {
    this.service.deleteExpense(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  loadData() {
    const params: IListExpensesRequest = {
      page: 0,
      perPage: 100,
    };
    this.service
      .listExpenses(params, this.dataService.productiveUnit.id)
      .subscribe((response: IListExpensesResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
