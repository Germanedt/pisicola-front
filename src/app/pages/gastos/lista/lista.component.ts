import { Component, OnInit } from '@angular/core';
import { IExpense, IListExpensesRequest, IListExpensesResponse } from 'src/app/models/Expenses.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaGastosComponent implements OnInit{
  listOfData: IExpense[] = []
  constructor(private service: ExpensesService,
    public dataService: SessionDataService) {

  }
  loadData() {
    const params: IListExpensesRequest = {
      page: 0,
      perPage:100
    }
    this.service.listExpenses(params, this.dataService.productiveUnit.id).subscribe(
      (response: IListExpensesResponse) => {
      this.listOfData = response.data;
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
}
