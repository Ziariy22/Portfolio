import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  menuopened = false;

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * open-button
   */
  openMenu() {
    this.menuopened = true;
  }


  /**
   * close-button
   */
  closeMenu() {
    this.menuopened = false;
  }

}
