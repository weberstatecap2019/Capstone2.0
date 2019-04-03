import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
  .active   {
    color: #fff !important;
  
  }
  .activate   {
    color: #492365 !important;
    border-bottom: #492365 solid 1px;
  }
`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone';
}
