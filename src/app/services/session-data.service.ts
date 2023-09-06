import { Injectable } from '@angular/core';
import { IUser } from '../models/User.model';
import { ILoginResponse, ITokenData } from '../models/Authentication.model';
import { IProductiveUnit } from '../models/ProductiveUnit.model';

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
const initProdUnit: IProductiveUnit = {
  id: 0,
  name: '',
  description: '',
  address: '',
  is_active: false,
  deleted_at: ''
}
@Injectable({
  providedIn: 'root',
})
export class SessionDataService {
  private userData: IUser = initUserData;
  tokenInfo: ITokenData = initTokenInfo;
  productiveUnit: IProductiveUnit = initProdUnit;
  constructor() {}

  public setLoginData(response: ILoginResponse) {
    this.tokenInfo = {
      expires_in: response.expires_in,
      expires_at: response.expires_at,
      token: response.type + ' ' + response.token,
    };
    this.userData = response.profile;
    //window.sessionStorage.setItem('userData', JSON.stringify(this.userData));
  }
  public setProductiveUnit(prodUnit: IProductiveUnit) {
    this.productiveUnit = prodUnit;
  }
  public getUserData(): IUser {
    return this.userData;
  }
  public setInitValues() {
    this.userData = initUserData;
    this.tokenInfo = initTokenInfo;
  }
}
