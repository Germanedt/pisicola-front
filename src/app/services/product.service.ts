import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  IListProductRequest,
  IListProductResponse,
  ICreateProductRequest,
  IModifyProductRequest,
} from '../models/Product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listAllProduct(params: IListProductRequest) {
    return this.http.get<IListProductResponse>(
      environment.PRODUCT_LIST_ALL_SERVICE,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }
  public listByProductiveUnitProduct(
    params: IListProductRequest,
    productiveUnitId: number
  ) {
    return this.http.get<IListProductResponse>(
      environment.PRODUCT_LIST_BY_UNIT_SERVICE + '/' + productiveUnitId,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }
  public createProduct(payload: ICreateProductRequest) {
    return this.http.post(
      environment.PRODUCT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifyProduct(payload: IModifyProductRequest) {
    return this.http.put(
      environment.PRODUCT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteProduct(payload: number) {
    return this.http.delete(
      environment.PRODUCT_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
      {
        headers: this.getHeaders(),
      }
    );
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
