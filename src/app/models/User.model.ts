import { IUserType } from './UserType.model';

interface IListUsersRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
  userTypeId?: number;
  productiveUnitId?: number;
  includeAdmins?: boolean;
}
interface IMetaListUsersResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface IListUsersResponse {
  data: IUser[];
  meta: IMetaListUsersResponse;
}

interface IUsersCreateRequest {
  full_name: string;
  email: string;
  user_type_id: number;
  password: string;
  password_confirmation: string;
  
}
interface IUserModifyRequest {
  id: number;
  full_name: string;
  email: string;
  user_type_id: number;
  password: string;
  password_confirmation: string;
  
}
interface IUser {
  id: number;
  user_type_id: number;
  email: string;
  full_name: string;
  is_active: boolean;
  deleted_at: string;
  created_at?: string;
  updated_at?: string;
  user_type?: IUserType;
}

export {
  IListUsersRequest,
  IListUsersResponse,
  IUsersCreateRequest,
  IUserModifyRequest,
  IUser,
};
