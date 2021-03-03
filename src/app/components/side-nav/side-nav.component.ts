import { Component, OnInit } from '@angular/core';
import {  faCoffee, faChartBar, faDatabase, faCogs, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons' ;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  faCoffee = faCoffee;
  faChartBar = faChartBar;
  faDatabase = faDatabase;
  faCogs = faCogs;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
