import { IPond } from './Pond.model';
import { IProduct } from './Product.model';

interface ISowing {
  id: number;
  user_id_created: number;
  pond_id: number;
  fish_step_id: number;
  total_fish: number;
  closed_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  pond?: IPond;
  fish_step?: IProduct;
}
interface IListSowingRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
  includeClosed?: boolean;
}
interface IListSowingResponse {
  data: ISowing[];
  meta: IMetaListSowingResponse;
}
interface IMetaListSowingResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateSowingRequest {
  pond_id: number;
  fish_step_id: number;
  total_fish: number;
}
interface IModifySowingRequest {
  id: number;
  pond_id: number;
  fish_step_id: number;
  total_fish: number;
}
export {
  IListSowingRequest,
  IListSowingResponse,
  ICreateSowingRequest,
  IModifySowingRequest,
  ISowing,
};
