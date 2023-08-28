import { IEmployees } from './Employee.model';
import { ITask } from './Task.model';

interface IListTaskLogRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListTaskLogResponse {
  data: ITaskLog[];
  meta: IMetaListTaskLogResponse;
}
interface IMetaListTaskLogResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreateTaskLogRequest {
  task_id: number;
  employee_id: number;
  started_at: string;
  finished_at: string;
}
interface IModifyTaskLogRequest {
  id: number;
  task_id: number;
  employee_id: number;
  started_at: string;
  finished_at: string;
}
interface ITaskLog {
  id: number;
  task_id: number;
  employee_id: number;
  productive_unit_id: number;
  started_at: string;
  finished_at: string;
  duration: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  task?: ITask;
  employee?: IEmployees;
}
export {
  IListTaskLogRequest,
  IListTaskLogResponse,
  ICreateTaskLogRequest,
  IModifyTaskLogRequest,
  ITaskLog,
};
