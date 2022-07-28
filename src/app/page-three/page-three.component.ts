import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  savedData: any = null;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const assignmentSavedData: any = localStorage.getItem('assignmentSavedData');
    if (assignmentSavedData) {
      this.savedData = JSON.parse(assignmentSavedData);
    } else {
      this.router.navigate(['']);
    }
  }

}
