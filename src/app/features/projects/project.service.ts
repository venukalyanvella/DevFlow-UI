import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProjectDto, Project, UpdateProjectDto } from './Models/Projects.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly apiUrl = `${environment.apiUrl}/projects`;

  constructor(private readonly _http: HttpClient) { }

 getAllProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: number): Observable<Project> {
    return this._http.get<Project>(`${this.apiUrl}/${id}`);
  }
createProject(dto: CreateProjectDto): Observable<Project> {
    return this._http.post<Project>(this.apiUrl, dto);
  }

  updateProject(
    id: number,
    dto: UpdateProjectDto
  ): Observable<void> {
    return this._http.put<void>(`${this.apiUrl}/${id}`, dto);
  }


  deleteProject(id: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
