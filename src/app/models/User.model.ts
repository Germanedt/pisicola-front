import { IUserType } from "./UserType.model";

interface IUser {
  id: number;
  user_type_id: number;
  email: string;
  full_name: string;
  is_active: boolean;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  user_type: IUserType
}

export { IUser };
