import { Injectable } from '@angular/core';
import { IUser } from '../models/User.model';
import { ILoginResponse, ITokenData } from '../models/Authentication.model';
import {
  IListProductiveUnitRequest,
  IListProductiveUnitResponse,
  IProductiveUnit,
} from '../models/ProductiveUnit.model';
import { ProductiveUnitService } from './productiveUnits.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const initUserData: IUser = {
  id: 0,
  user_type_id: 0,
  email: '',
  full_name: '',
  is_active: false,
  deleted_at: '',
  created_at: '',
  updated_at: '',
  user_type: {
    id: 0,
    key: '',
    created_at: '',
    updated_at: '',
  },
};
const initTokenInfo = {
  expires_in: 0,
  expires_at: '',
  token: '',
};
const initProductiveUnit: IProductiveUnit = {
  id: 0,
  name: '',
  description: '',
  address: '',
  is_active: false,
  deleted_at: '',
};
@Injectable({
  providedIn: 'root',
})
export class SessionDataService {
  private userData: IUser = initUserData;
  tokenInfo: ITokenData = initTokenInfo;
  private productiveUnit: IProductiveUnit = initProductiveUnit;
  constructor(private http: HttpClient) {}

  public setLoginData(response: ILoginResponse) {
    this.tokenInfo = {
      expires_in: response.expires_in,
      expires_at: response.expires_at,
      token: response.type + ' ' + response.token,
    };
    this.userData = response.profile;
    //window.sessionStorage.setItem('userData', JSON.stringify(this.userData));
  }

  public loadProductiveUnit() {
    return this.http.get<IListProductiveUnitResponse>(
      environment.PRODUCTIVE_UNIT_LIST_SERVICE,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          Authorization: this.tokenInfo.token,
        },
        params: {
          page: 1,
          perPage: 1,
        },
      }
    );
  }
  public getUserData(): IUser {
    return this.userData;
  }
  public getProductiveUnit(): IProductiveUnit {
    return this.productiveUnit;
  }
  public setProductiveUnit(productiveUnit: IProductiveUnit) {
    this.productiveUnit = productiveUnit;
  }
  public setInitValues() {
    this.userData = initUserData;
    this.tokenInfo = initTokenInfo;
    this.productiveUnit =initProductiveUnit;
  }
}
