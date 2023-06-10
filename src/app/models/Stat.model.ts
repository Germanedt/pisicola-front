interface IStat {
  id: number;
  fish_step_id: number;
  key: string;
  name: string;
  value_minimum: any;
  value_maximum: any;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
interface ICreateStatRequest {
  fish_step_id: number;
  key: string;
  name: string;
  description: string;
  value_minimum: any;
  value_maximum: any;
}
interface IListStatsRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListStatsResponse {
  data: IStat[];
  meta: IMetaListStatsResponse;
}
interface IMetaListStatsResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface IStatModifyRequest {
  id: number;
  fish_step_id: number;
  key: string;
  name: string;
  description: string;
  value_minimum: any;
  value_maximum: any;
}
export {
  IStat,
  ICreateStatRequest,
  IListStatsRequest,
  IListStatsResponse,
  IStatModifyRequest,
};
