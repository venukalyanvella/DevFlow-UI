import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  isEditMode: boolean = false;
  isSaving: boolean = false;
projectForm :any;

  constructor(){}

  ngOnInit(): void {
  }


  onSubmit()
  {}

}
