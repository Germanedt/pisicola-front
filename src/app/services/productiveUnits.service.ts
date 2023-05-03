import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionDataService } from './session-data.service';
import {
  IListProductiveUnitRequest,
  IListProductiveUnitResponse,
  IProductiveUnit,
  IProductiveUnitCreateRequest,
} from '../models/ProductiveUnit.model';
@Injectable({
  providedIn: 'root',
})
export class ProductiveUnitService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listProductiveUnits(params: IListProductiveUnitRequest) {
    return this.http.get<IListProductiveUnitResponse>(environment.PRODUCTIVE_UNIT_LIST_SERVICE, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createProductiveUnit(payload: IProductiveUnitCreateRequest) {
    return this.http.post(environment.PRODUCTIVE_UNIT_CREATE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public getProductiveUnitById(payload: number) {
    return this.http.get<IProductiveUnit>('', {
      headers: this.getHeaders(),
      params: {
        idProductiveUnit: payload,
      },
    });
  }

  public deleteProductiveUnit(payload: number) {
    return this.http.delete(environment.PRODUCTIVE_UNIT_DELETE_SERVICE+'/'+payload)
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
