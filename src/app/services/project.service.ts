import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl: string = "http://localhost:8080/project/"; 

  constructor(
    private http: HttpClient
    ) { }

  getProject(project_id: number){
    return this.http
    .get<Project>(this.baseUrl + project_id);
  }

}
