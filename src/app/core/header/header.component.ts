import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuExpanded = false;

  constructor() {}

  ngOnInit(): void {
    
  }
  //extra closing methode for mobile devices - triggered on expandable navigation event
  closeMenu() {
    if(this.menuExpanded) {
      this.menuExpanded = false;
    }
  }

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }
  
}
