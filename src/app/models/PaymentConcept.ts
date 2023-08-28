interface IListPaymentConceptRequest {
  page: number;
  perPage: number;
  includeDeletes?: boolean;
}
interface IListPaymentConceptResponse {
  data: IPaymentConcept[];
  meta: IMetaListPaymentConceptResponse;
}
interface IMetaListPaymentConceptResponse {
  current_page: number;
  first_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
interface ICreatePaymentConceptRequest {
  productive_unit_id: number;
  name: string;
  description: string;
  required_tasks: boolean;
}
interface IModifyPaymentConceptRequest {
  id: number;
  productive_unit_id: number;
  name: string;
  description: string;
  required_tasks: boolean;
}
interface IPaymentConcept {
  id: number;
  productive_unit_id: number;
  name: string;
  description: string;
  required_tasks: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
export {
  IListPaymentConceptRequest,
  IListPaymentConceptResponse,
  ICreatePaymentConceptRequest,
  IModifyPaymentConceptRequest,
  IPaymentConcept,
};
