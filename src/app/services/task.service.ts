import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import { ITask } from 'src/app/models/task-model';
import { ICreateTask } from '../models/create-model';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService 
  {
    constructor( private http: HttpClient) {}
    
        tasks: ITask[] = []

        getAll(): Observable<ITask[]> 
        {
          return this.http.get<ITask[]>('https://localhost:7046/api/Tasks').pipe(          
            tap(tasks => this.tasks = tasks),
                   
        )}
        
        create(task: ICreateTask): Observable<ITask> 
        {
          return this.http.post<ITask>('https://localhost:7046/api/Tasks', task)
            .pipe(tap(task => this.tasks.push(task)))                   
        }  

        deleteTask(taskId: string): Observable<any> 
        {
          const url = `https://localhost:7046/api/Tasks/${taskId}`; 
          return this.http.delete(url);  
        }
        
}