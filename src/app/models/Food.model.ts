import { ISowing } from "./Sowing.model";

interface IListFoodRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListFoodResponse {
  data: IFood[];
  meta: IMetaListFoodResponse;
}
interface IMetaListFoodResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateFoodRequest {
  sowing_id: number;
  supply_id: number;
  quantity: number;
  apply_at: string;
}
interface IModifyFoodRequest {
  id: number;
  name: string;
  description: string;
}
interface IFood {
  id: number;
  sowing_id: number;
  fish_step_id: number;
  supply_id: number;
  quantity: 3;
  apply_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  sowing: ISowing;
  supply: any;
}
export {
  IListFoodRequest,
  IListFoodResponse,
  ICreateFoodRequest,
  IModifyFoodRequest,
  IFood,
};

/* Supply
{
    id: 1;
    productive_unit_id: 1;
    unit_type_id: 5;
    use_type: 'ALIMENT';
    name: 'Croquetas';
    description: 'jjjjjj';
    stock: 42;
    total_cost: 30000;
    created_at: '2024-01-29T16:15:44.084-05:00';
    updated_at: '2024-02-09T09:58:05.366-05:00';
    deleted_at: null;
    unit_type: {
      id: 5;
      key: 'u';
      name: 'Unidad';
      type: 'unidades';
      created_at: '2023-10-15T17:19:57.597-05:00';
      updated_at: '2023-10-15T17:19:57.597-05:00';
      deleted_at: null;
    };
  };
*/