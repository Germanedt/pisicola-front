interface IListTaskRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListTaskResponse {
  data: ITask[];
  meta: IMetaListTaskResponse;
}
interface IMetaListTaskResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateTaskRequest {
  productive_unit_id: number;
  name: string;
  description: string;
}
interface IModifyTaskRequest {
  id: number;
  productive_unit_id: number;
  name: string;
  description: string;
}
interface ITask {
  id: number;
  productive_unit_id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
export {
  IListTaskRequest,
  IListTaskResponse,
  ICreateTaskRequest,
  IModifyTaskRequest,
  ITask,
};
