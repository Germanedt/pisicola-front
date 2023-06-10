import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  ICreateStatRequest,
  IListStatsRequest,
  IListStatsResponse,
  IStatModifyRequest,
} from '../models/Stat.model';
@Injectable({
  providedIn: 'root',
})
export class StatService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listStats(params: IListStatsRequest, productId: number) {
    return this.http.get<IListStatsResponse>(
      environment.STAT_LIST_BY_PRODUCT_SERVICE + '/' + productId,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }

  public createStat(payload: ICreateStatRequest) {
    return this.http.post(
      environment.STAT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteStat(payload: number) {
    return this.http.delete(
      environment.STAT_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
      {
        headers: this.getHeaders(),
      }
    );
  }
  public modifyStat(payload: IStatModifyRequest) {
    return this.http.put(
      environment.STAT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
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
