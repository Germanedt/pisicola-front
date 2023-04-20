import { IUser } from './User.model';

interface ILoginRequest {
  email: string;
  password: string;
}
interface ILoginResponse {
  type: string;
  token: string;
  expires_at: string;
  expires_in: number;
  profile: IUser;
}

interface ITokenData {
  expires_in: number;
  expires_at: string;
  token: string;
}
export { ILoginRequest, ILoginResponse, ITokenData };
