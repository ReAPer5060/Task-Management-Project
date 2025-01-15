import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  addTask(task: any) {
    return this.http.post(this.baseUrl, task);
  }

  getTasksByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  getAllTasks() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }
  updateTask(task: any,taskId: number) {
    return this.http.put(`${this.baseUrl}/${taskId}`, task);
  }
  getTasksById(id: number) {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
  getJitendra(){}

}
