import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ICreateEmployeeRequest, IListEmployeesRequest, IListEmployeesResponse, IModifyEmployeeRequest } from '../models/Employee.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listEmployess(params: IListEmployeesRequest, productiveId: number) {
    const url = environment.EMPLOYEES_LIST_SERVICE + productiveId;
    return this.http.get<IListEmployeesResponse>(url, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createEmployee(payload: ICreateEmployeeRequest) {
    return this.http.post(environment.EMPLOYEES_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifyEmployee(payload: IModifyEmployeeRequest) {
    return this.http.put(environment.EMPLOYEES_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public deleteEmployee(payload: number) {
    return this.http.delete(environment.EMPLOYEES_CREATE_MODIFY_DELETE_SERVICE+'/'+payload, {
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
