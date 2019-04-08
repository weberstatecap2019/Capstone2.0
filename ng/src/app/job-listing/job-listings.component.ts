import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { JobsService } from '../services/jobs.service';

@Component({
    //selector: 'quotes-el',
    templateUrl: './job-listings.component.html'
})

export class JobsComponent implements OnInit {

    constructor(private jobList: JobsService) { }
    jobs: Job[] = []

    ngOnInit(): void {
        this.jobList.getJobs().subscribe(data => this.jobs = data)
    }
   
}