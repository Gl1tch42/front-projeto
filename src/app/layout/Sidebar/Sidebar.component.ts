import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit  {


  constructor() { }

  ngAfterViewInit() {
    // $('.dropdown-toggle').dropdown();
  }

  ngOnInit() {
  }

}
