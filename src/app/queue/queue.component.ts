import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
class QueueComponent implements OnInit {

    subscription: string;
    message: string;

  constructor() { }

  ngOnInit() {
    this.message = "Anuroop";
  }
}

export default QueueComponent;