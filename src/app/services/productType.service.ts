import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { ICreateProductTypeRequest, IListProductTypeRequest, IListProductTypeResponse, IModifyProductTypeRequest } from '../models/ProductType.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listProductTypes(params: IListProductTypeRequest) {
    return this.http.get<IListProductTypeResponse>(environment.PRODUCT_TYPE_LIST_SERVICE, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createProductType(payload: ICreateProductTypeRequest) {
    return this.http.post(environment.PRODUCT_TYPE_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifyProductType(payload: IModifyProductTypeRequest) {
    return this.http.put(environment.PRODUCT_TYPE_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public deleteProductType(payload: number) {
    return this.http.delete(environment.PRODUCT_TYPE_CREATE_MODIFY_DELETE_SERVICE+'/'+payload, {
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
