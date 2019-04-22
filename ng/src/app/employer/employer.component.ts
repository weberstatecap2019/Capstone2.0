import { Component, OnInit, Output } from '@angular/core';
import { Job } from '../models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';

@Component({
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  job: Job = new Job()
  //@Output() createJob= new EventEmitter<Job>();
  constructor(private jobsService: JobsService, 
    private route : ActivatedRoute, 
    private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    let bid = this.route.snapshot.params['id']
    if(bid !== undefined){
      this.jobsService.getJob(bid).subscribe( orig => Object.assign(this.job, orig))
    }
  }
  onCreate(job: Job): void {
    this.jobsService.createJob(job).subscribe(res => {
      console.log(job)
   
      //this.createJob.emit(job);
    });
  }

  // onSubmit(f: NgForm){
  //   if(f.valid){
  //     if(true){
  //       this.jobsService.createJob(this.job).subscribe(res => {
  //         this.job = res
  //         this.toastr.success("The job was successfully created.")
  //         console.log(this.job)
  //       })
  //     }else{
  //       this.jobsService.updateJob(this.job).subscribe(res => {
  //         this.job = res
  //         this.toastr.success("The job was successfully updated.")
  //         console.log(this.job)
  //       })
  //     }

      //this.router.navigate(['/home'])
     // } else {
    //   for(let c in f.controls){
    //     f.controls[c].markAsDirty()
    //   }
    // }
  //}

}
