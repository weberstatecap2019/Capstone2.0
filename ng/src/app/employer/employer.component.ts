import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  job: Job = new Job()
  constructor(private jobsService: JobsService, 
    private route : ActivatedRoute, 
    private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    let bid = this.route.snapshot.params['id']
    if(bid !== undefined){
      this.jobsService.getJob(bid).subscribe( orig => Object.assign(this.job, orig))
    }
  }

  onSubmit(f: NgForm){
    if(f.valid){
      if(this.job._id === undefined){
        this.jobsService.createJob(this.job).subscribe(res => {
          this.job = res
          this.toastr.success("The book was successfully created.")
        })
      }else{
        this.jobsService.updateJob(this.job).subscribe(res => {
          this.job = res
          this.toastr.success("The book was successfully updated.")
        })
      }

      this.router.navigate(['/home'])
    } else {
      for(let c in f.controls){
        f.controls[c].markAsDirty()
      }
    }
  }

}
