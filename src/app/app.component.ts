import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DBS Queue Manager';
  
  private queues = [];
  private showAddQueue = false;
  private newQName: String;

  constructor(private dataService: DataService){
    this.dataService.getAllQueues().subscribe((res : any[])=>{
      console.log("The queue: "+res);
      this.queues = res;
    })
  }


  addQName(newName:String){
    this.dataService.saveQueue(newName);
  }

  deleteQ(queueId:String){
    this.dataService.deleteQueue(queueId);
  }

  show_addQueue(){
    this.showAddQueue = true;
  }
  close_addQueue(){
    this.showAddQueue = false;
  }
 
};