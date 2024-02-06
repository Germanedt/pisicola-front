interface IListExpensesRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListExpensesResponse {
  data: IExpense[];
  meta: IMetaExpensesResponse;
}
interface IMetaExpensesResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateExpenseRequest {
  productive_unit_id: number;
  name: string;
  value: number;
  note: string;
  manual_created_at: string;
}
interface IModifyExpenseRequest {
  id: number;
  name: string;
  description: string;
}
interface IExpense {
  id: number;
  productive_unit_id: number;
  name: string;
  value: number;
  note: string;
  manual_created_at: string;
  created_at: string;
  updated_at: string;
}
export {
  IListExpensesRequest,
  IListExpensesResponse,
  ICreateExpenseRequest,
  IModifyExpenseRequest,
  IExpense,
};
