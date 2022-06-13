import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  Project!: IProject[] | any
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.showProject()
  } 
  showProject(){
    this.projectServices.getprojects().subscribe(data => {
      this.Project = data
    })
  }

}
