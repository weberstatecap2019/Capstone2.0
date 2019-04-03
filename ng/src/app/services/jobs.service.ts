import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from '../models/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http : HttpClient){}
  getJob(id: string): Observable<Jobs> {
    return this.http.get<Jobs>(`http://localhost:8080/api/jobs/${id}`, httpHeaders)
  }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>('http://localhost:8080/api/jobs', httpHeaders)
  }

  createJob(job: Jobs): any {
    return this.http.post<Jobs>('http://localhost:8080/api/jobs/create', job, httpHeaders)
  }

  updateJob(job: Jobs): any {
    return this.http.put<Jobs>(`http://localhost:8080/api/jobs/${job._id}/update`, job, httpHeaders)
  }

  deleteJob(job: Jobs): any {
    return this.http.delete<Jobs>(`http://localhost:8080/api/jobs/${job._id}/delete`, httpHeaders)
  }
}
