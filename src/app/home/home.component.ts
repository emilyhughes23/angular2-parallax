import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

name:string;
  showHide:boolean;
    showHide2:boolean;

  
  constructor() {
    this.showHide = true;
        this.showHide2 = false;

  }
  
  changeShowStatus(){
    this.showHide = !this.showHide;
        this.showHide2 = !this.showHide2;

  }
  

}
