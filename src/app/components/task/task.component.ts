import { Input, Component } from '@angular/core';
import { ITask } from 'src/app/models/task-model';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [MatExpansionModule,MatIconModule, MatButtonModule, MatDividerModule],
})
export class TaskComponent{
  constructor( public taskService: TaskService) {}

  onDeleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {});  
  }
  @Input() task: ITask
  panelOpenState = false;

}
