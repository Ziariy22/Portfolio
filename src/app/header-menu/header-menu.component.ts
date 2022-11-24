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

  openMenu() {
    this.menuopened = true;
  }

  closeMenu() {
    this.menuopened = false;
  }
}
