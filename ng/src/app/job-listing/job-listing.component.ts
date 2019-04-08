import {Component, Input} from '@angular/core';
import {Job} from '../models/job';



@Component({
    selector: 'jobs-el',
    templateUrl: './job-listing.component.html'
})

export class JobComponent {
    @Input() job: Job
    expanded : boolean = false

    expandedOrShrink(){
        this.expanded = !this.expanded
    }
  
  
      


   
}
