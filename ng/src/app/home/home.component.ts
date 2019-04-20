import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jobList: JobsService) { }
  jobs: Job[] = []

  ngOnInit(): void {
      this.jobList.getJobs().subscribe(data => this.jobs = data)
      //console.log( "this is jobs")
  }

}
