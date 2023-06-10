
interface IListProductiveUnitRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean
}
interface IMetaListProductiveUnitResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface IListProductiveUnitResponse {
  data: IProductiveUnit[];
  meta: IMetaListProductiveUnitResponse;
}

interface IProductiveUnitCreateRequest {
  manager_id: number;
  name: string;
  description: string;
  address: string;
}
interface IProductiveUnitModifyRequest {
  id: number;
  name: string;
  description: string;
  address: string;
}
interface IProductiveUnit {
  id: number;
  name: string;
  description: string;
  address: string;
  is_active: boolean;
  deleted_at: string;
  created_at?: string;
  updated_at?: string;
}

export {
  IListProductiveUnitRequest,
  IListProductiveUnitResponse,
  IProductiveUnitCreateRequest,
  IProductiveUnitModifyRequest,
  IProductiveUnit,
};
