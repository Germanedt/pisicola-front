interface IListProductTypeRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListProductTypeResponse {
  data: IProductType[];
  meta: IMetaListProductTypeResponse;
}
interface IMetaListProductTypeResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateProductTypeRequest {
  name: string;
  description: string;
}
interface IModifyProductTypeRequest {
  id: number;
  name: string;
  description: string;
}
interface IProductType {
  id: number;
  name: string;
  description: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
}
export {
  IListProductTypeRequest,
  IListProductTypeResponse,
  ICreateProductTypeRequest,
  IModifyProductTypeRequest,
  IProductType,
};
