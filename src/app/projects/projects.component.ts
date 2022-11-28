import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnAll = true;
  btnAngular = false;
  btnJavascript = false;
  status: any;
  Javascript = true;
  Angular = true;


  /**
   * all projects
   */
  showAll() {
    this.Javascript = true;
    this.Angular = true;
    this.btnAngular = false;
    this.btnJavascript = false;
    this.btnAll = true;
  }


  /**
   * only angular-projects
   */
  showAngular() {
    this.Javascript = false;
    this.Angular = true;
    this.btnAngular = true;
    this.btnJavascript = false;
    this.btnAll = false;
  }

  /**
   * only-Javascript-projects
   */
  showJavascript() {
    this.Javascript = true;
    this.Angular = false;
    this.btnAngular = false;
    this.btnJavascript = true;
    this.btnAll = false;
  }

}
