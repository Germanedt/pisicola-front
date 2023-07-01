import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  IListTaskLogRequest,
  IListTaskLogResponse,
  ICreateTaskLogRequest,
  IModifyTaskLogRequest,
} from '../models/TaskLog.model';
@Injectable({
  providedIn: 'root',
})
export class TaskLogService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listTaskLogs(params: IListTaskLogRequest, productiveUnitId: number) {
    const url = environment.TASKLOG_LIST_SERVICE + productiveUnitId;
    return this.http.get<IListTaskLogResponse>(url, {
      headers: this.getHeaders(),
      params: {
        page: params.page,
        perPage: params.perPage,
      },
    });
  }

  public createTaskLog(payload: ICreateTaskLogRequest) {
    return this.http.post(
      environment.TASKLOG_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifyTaskLog(payload: IModifyTaskLogRequest) {
    return this.http.put(
      environment.TASKLOG_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteTaskLog(payload: number) {
    return this.http.delete(
      environment.TASKLOG_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  private getHeaders() {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      Authorization: this.sessionData.tokenInfo.token,
    });
  }
}
