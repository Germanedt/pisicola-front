import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionDataService } from './session-data.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {
  ICreateTaskRequest,
  IListTaskRequest,
  IListTaskResponse,
  IModifyTaskRequest,
} from '../models/Task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private sessionData: SessionDataService
  ) {}

  public listTasks(params: IListTaskRequest, productiveUnitId: number) {
    const url = environment.TASK_LIST_SERVICE + productiveUnitId;
    return this.http.get<IListTaskResponse>(
      url,
      {
        headers: this.getHeaders(),
        params: {
          page: params.page,
          perPage: params.perPage,
        },
      }
    );
  }

  public createTask(payload: ICreateTaskRequest) {
    return this.http.post(
      environment.TASK_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public modifyTask(payload: IModifyTaskRequest) {
    return this.http.put(
      environment.TASK_CREATE_MODIFY_DELETE_SERVICE,
      payload,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteTask(payload: number) {
    return this.http.delete(
      environment.TASK_CREATE_MODIFY_DELETE_SERVICE + '/' + payload,
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
