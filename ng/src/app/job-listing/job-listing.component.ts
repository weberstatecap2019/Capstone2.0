import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from '../models/job';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  @Input() job: Jobs
  constructor() { }

  ngOnInit() {
  }

}
