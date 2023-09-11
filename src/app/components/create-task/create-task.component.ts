import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { TaskService } from 'src/app/services/task.service';
import { ModalService } from 'src/app/services/modal.service';
import {MatButtonModule} from '@angular/material/button';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  standalone: true,
  imports: [MatButtonModule],
  styleUrls: ['./create-task.component.css']
  
})
export class CreateTaskComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private modalService: NgbActiveModal
  ) {
  }


  form = new FormGroup({
    name: new FormControl<string>(''),
    content: new FormControl<string>('')
  })

  get name() {
    return this.form.controls.name as FormControl
  }

  get content() {
    return this.form.controls.content as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.taskService.create({
      name: this.form.value.name as string,
      content: this.form.value.content as string
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
