import { Component, OnInit, Output } from '@angular/core';
import { PostForum } from '../models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';
import { QuestionsService } from '../services/questions.service';

@Component({
  templateUrl: './question-form.component.html'
})
export class QuestionFormComponent implements OnInit {
  question: PostForum = new PostForum()
  //job: Job = new Job()
  //@Output() createJob= new EventEmitter<Job>();
  constructor(private questionsService: QuestionsService, 
    private route : ActivatedRoute, 
    private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    let bid = this.route.snapshot.params['id']
    if(bid !== undefined){
      this.questionsService.getQuestion(bid).subscribe( orig => Object.assign(this.question, orig))
    }
  }
  onSubmit(question: PostForum): void {
    this.questionsService.createQuestion(question).subscribe(res => {
      console.log(question)
      //this.createJob.emit(job);
    });
  }

 

}