import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  Project!: IProject[] | any[]
  constructor(private projectServices: ProjectService ) { }

  ngOnInit(): void {
    this.showProject()
  }
  showProject(){
    this.projectServices.getprojects().subscribe(data => {
      this.Project = data
    })
  }
  onRemove(id:number){
    this.projectServices.deleteproject(id).subscribe(() => {
      this.Project = this.Project.filter(item => item.id !== id)
    })
  }
}
