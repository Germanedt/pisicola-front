import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { IListFoodRequest, IListFoodResponse, ICreateFoodRequest, IModifyFoodRequest } from '../models/Food.model';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listFoods(params: IListFoodRequest, sowingId: number) {
    const url = environment.FOODS_LIST_SERVICE+sowingId;
    return this.http.get<IListFoodResponse>(url, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createFood(payload: ICreateFoodRequest) {
    return this.http.post(environment.FOODS_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public modifyFood(payload: IModifyFoodRequest) {
    return this.http.put(environment.FOODS_CREATE_MODIFY_DELETE_SERVICE, payload, {
      headers: this.getHeaders(),
    });
  }

  public deleteFood(payload: number) {
    return this.http.delete(environment.FOODS_CREATE_MODIFY_DELETE_SERVICE+'/'+payload, {
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
