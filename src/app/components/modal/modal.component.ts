import { Component, Input, OnInit} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';
import {MatIconModule} from '@angular/material/icon';
import { ModalDismissReasons,  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [ MatIconModule,
             MatButtonModule,
             MatDividerModule,
             FormsModule,      
            ReactiveFormsModule],
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit{
  constructor(private modalService: NgbModal, private taskService: TaskService) {}
  
  createForm = new FormGroup({
    name: new FormControl(''),
    content: new FormControl(''),
  });

  get name() {
    return this.createForm.controls.name as FormControl
  }

  get content() {
    return this.createForm.controls.content as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.taskService.create({
      name: this.createForm.value.name as string,
      content: this.createForm.value.content as string
    }).subscribe(() => 
    {
      this.modalService.dismissAll("Save")    
    })
  }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
 
}

