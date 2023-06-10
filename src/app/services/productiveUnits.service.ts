import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionDataService } from './session-data.service';
import {
  IListProductiveUnitRequest,
  IListProductiveUnitResponse,
  IProductiveUnit,
  IProductiveUnitCreateRequest,
  IProductiveUnitModifyRequest,
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
    return this.http.post(environment.PRODUCTIVE_UNIT_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifyProductiveUnit(payload: IProductiveUnitModifyRequest) {
    return this.http.put(
      environment.PRODUCTIVE_UNIT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteProductiveUnit(payload: number) {
    return this.http.delete(environment.PRODUCTIVE_UNIT_CREATE_MODIFY_DELETE_SERVICE+'/'+payload)
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
