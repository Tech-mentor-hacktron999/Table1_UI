import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DBS Queue Manager';
  
  products: any = 
{
"id":"1",
"name":"Queue1"} 
};
