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
interface ISowingStat {
  id: number;
  pond_id: number;
  sowing_id: number;
  fish_step_stat_id: number;
  key: string;
  value: number;
  fish_step_stat_name: string;
  fish_step_stat_value_minimum: number;
  fish_step_stat_value_maximum: number;
  topic: number;
  topic_time: string;
  triggered_alarm: boolean;
  alarm_source: any;
  created_at: string;
  updated_at: string;
}
export {
  IListSowingRequest,
  IListSowingResponse,
  ICreateSowingRequest,
  IModifySowingRequest,
  ISowing,
  ISowingStat,
};
