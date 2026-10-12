import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  ProjectDetails: any;
  project:any=[];
isDeleting:boolean=false;
isLoading:boolean=false;
errorMessage:any;

  constructor() { }

  ngOnInit(): void {
  }


  deleteProject(){

  }


}
