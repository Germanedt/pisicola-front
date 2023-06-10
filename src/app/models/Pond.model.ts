interface IListPondRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListPondResponse {
  data: IPond[];
  meta: IMetaListPondResponse;
}
interface IMetaListPondResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreatePondRequest {
  productive_unit_id: number;
  name: string;
  description: string;
  sensor_id: string;
}
interface IModifyPondRequest {
  id: number;
  name: string;
  description: string;
  sensor_id: string;
}
interface IPond {
  id: number;
  productive_unit_id: number,
  name: string;
  description: string;
  sensor_id: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
            
}
export {
  IListPondRequest,
  IListPondResponse,
  ICreatePondRequest,
  IModifyPondRequest,
  IPond,
};
