import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-task-component',
  templateUrl: './api-task-component.component.html',
  styleUrls: ['./api-task-component.component.css']
})
export class ApiTaskComponentComponent {

  constructor(private service:ApiServiceService){}
  a:any

  ngOnInit(){

    return   this.service.getData().subscribe((data)=>{
      
      this.a=data;
    })
  }

}
