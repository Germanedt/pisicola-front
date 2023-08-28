import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import {
  ICreatePaymentConceptRequest,
  IListPaymentConceptRequest,
  IListPaymentConceptResponse,
  IModifyPaymentConceptRequest,
} from '../models/PaymentConcept';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PaymentConceptService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listPaymentConcepts(
    params: IListPaymentConceptRequest,
    productiveUnitId: number
  ) {
    return this.http.get<IListPaymentConceptResponse>(
      environment.PAYMENT_CONCEPT_LIST_SERVICE + productiveUnitId,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }

  public createPaymentConcept(payload: ICreatePaymentConceptRequest) {
    return this.http.post(
      environment.PAYMENT_CONCEPT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifyPaymentConcept(payload: IModifyPaymentConceptRequest) {
    return this.http.put(
      environment.PAYMENT_CONCEPT_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deletePaymentConcept(payload: number) {
    return this.http.delete(
      environment.PAYMENT_CONCEPT_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
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
