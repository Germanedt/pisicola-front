import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IListSupplyRequest, IListSupplyResponse, ICreateSupplyRequest, IModifySupplyRequest } from '../models/Supply.model';
@Injectable({
  providedIn: 'root',
})
export class SupplyService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listSupplies(params: IListSupplyRequest) {
    const url = environment.SUPPLY_LIST_SERVICE + this.sessionData.productiveUnit.id;
    return this.http.get<IListSupplyResponse>(url, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createSupply(payload: ICreateSupplyRequest) {
    return this.http.post(environment.SUPPLY_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifySupply(payload: IModifySupplyRequest) {
    return this.http.put(environment.SUPPLY_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public deleteSupply(payload: number) {
    return this.http.delete(environment.SUPPLY_CREATE_MODIFY_DELETE_SERVICE+'/'+payload, {
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
