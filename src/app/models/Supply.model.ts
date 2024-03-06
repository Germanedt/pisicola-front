import { IProductiveUnit } from "./ProductiveUnit.model";

interface IListSupplyRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListSupplyResponse {
  data: ISupply[];
  meta: IMetaListSupplyResponse;
}
interface IMetaListSupplyResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateSupplyRequest {
  name: string;
  description: string;
}
interface IModifySupplyRequest {
  id: number;
  name: string;
  description: string;
}
interface ISupply {
  id: number;
  name: string;
  description: string;
  quantity: number;
  total_cost: number;
  use_type: string;
  stock: number;
  productive_unit_id: number;
  unit_type_id: number;
  productive_unit: IProductiveUnit;
  unit_type: any;
  stock_details: any;
}
export {
  IListSupplyRequest,
  IListSupplyResponse,
  ICreateSupplyRequest,
  IModifySupplyRequest,
  ISupply,
};
