import { CommonService } from './../../../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean=true;

  constructor(private _commonService:CommonService) { }

  ngOnInit(): void {
  }
  showHideMenu(){
    this.showMenu = !this.showMenu;
    this._commonService.sidePanel.next(this.showMenu);
  }
}
