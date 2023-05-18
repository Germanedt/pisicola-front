import { IProductType } from "./ProductType.model";
import { IProductiveUnit } from "./ProductiveUnit.model";

interface IListProductRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListProductResponse {
  data: IProduct[];
  meta: IMetaListProductResponse;
}
interface IMetaListProductResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateProductRequest {
  name: string;
  description: string;
  fish_id: number,
  productive_unit_id: number;
}
interface IModifyProductRequest {
  id: number;
  name: string;
  description: string;
  fish_id: number,
  productive_unit_id: number;
}
interface IProduct {
  id: number;
  name: string;
  description: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
  fish_id: number,
  productive_unit_id: number,
  fish?: IProductType,
  productive_unit?: IProductiveUnit
}
export {
  IListProductRequest,
  IListProductResponse,
  ICreateProductRequest,
  IModifyProductRequest,
  IProduct,
};
