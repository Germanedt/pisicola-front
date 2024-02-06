import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ICreateExpenseRequest, IListExpensesRequest, IListExpensesResponse, IModifyExpenseRequest } from '../models/Expenses.model';
@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listProductTypes(params: IListExpensesRequest, productiveId: number) {
    const url = environment.EXPENSES_LIST_SERVICE + productiveId;
    return this.http.get<IListExpensesResponse>(url, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createExpense(payload: ICreateExpenseRequest) {
    return this.http.post(environment.EXPENSES_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifyProductType(payload: IModifyExpenseRequest) {
    return this.http.put(environment.EXPENSES_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public deleteProductType(payload: number) {
    return this.http.delete(environment.EXPENSES_CREATE_MODIFY_DELETE_SERVICE+'/'+payload, {
      headers: this.getHeaders(),
    })
  }

  private getHeaders() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      Authorization: this.sessionData.tokenInfo.token,
    });
  }
}
