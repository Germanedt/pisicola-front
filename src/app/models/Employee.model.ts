interface IListEmployeesRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListEmployeesResponse {
  data: IEmployees[];
  meta: IMetaListEmployeesResponse;
}
interface IMetaListEmployeesResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateEmployeeRequest {
  productive_unit_id: number;
  identifier_type: string;
  identifier: string;
  full_name: string;
  phone: string;
  occupation: string;
}
interface IModifyEmployeeRequest {
  id: number;
  name: string;
  description: string;
}
interface IEmployees {
  id: number;
  productive_unit_id: number;
  identifier_type: string;
  identifier: string;
  full_name: string;
  phone: string;
  occupation: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
export {
  IListEmployeesRequest,
  IListEmployeesResponse,
  ICreateEmployeeRequest,
  IModifyEmployeeRequest,
  IEmployees,
};
