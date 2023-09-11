import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  title = 'Tasks'
  loading = false
  data:any

  constructor(
    public taskService: TaskService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    
     this.taskService.getAll().subscribe(response => console.log())
     
  }

}
