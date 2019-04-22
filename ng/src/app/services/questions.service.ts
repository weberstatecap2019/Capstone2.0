import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostForum } from '../models/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http : HttpClient){}
  getQuestion(id: string): Observable<PostForum> {
    return this.http.get<PostForum>(`http://localhost:8080/api/post_forums/${id}`, httpHeaders)
  }

  getQuestions(): Observable<Array<PostForum>> {
    return this.http.get<Array<PostForum>>('http://localhost:8080/api/post_forums', httpHeaders)
  }

  createQuestion(question: PostForum): Observable<any> {
    console.log('Service call:', question)
    return this.http.post<PostForum>('http://localhost:8080/api/post_forums/create', question, httpHeaders)
  }

  updateJob(question: PostForum): any {
    return this.http.put<PostForum>(`http://localhost:8080/api/post_forums/${question._id}/update`,question, httpHeaders)
  }

  deleteJob(question: PostForum): any {
    return this.http.delete<PostForum>(`http://localhost:8080/api/post_forums/${question._id}/delete`, httpHeaders)
  }
}
