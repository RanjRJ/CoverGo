import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor() {
    localStorage.removeItem('assignmentSavedData');
  }

  ngOnInit(): void {
  }

}
