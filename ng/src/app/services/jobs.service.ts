import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../models/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private http : HttpClient){}
  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(`http://localhost:8080/api/jobs/${id}`, httpHeaders)
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:8080/api/jobs', httpHeaders)
  }

  createJob(job: Job): any {
    return this.http.post<Job>('http://localhost:8080/api/jobs/create', job, httpHeaders)
  }

  updateJob(job: Job): any {
    return this.http.put<Job>(`http://localhost:8080/api/jobs/${job._id}/update`, job, httpHeaders)
  }

  deleteJob(job: Job): any {
    return this.http.delete<Job>(`http://localhost:8080/api/jobs/${job._id}/delete`, httpHeaders)
  }
}
