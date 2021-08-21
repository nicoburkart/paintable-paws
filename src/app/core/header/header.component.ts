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
    // document.getElementById('main').onscroll = (event) => {
    //   this.scrollFunction(event.target as HTMLElement);
    // };
  }

  expandMenu() {
    this.menuExpanded = !this.menuExpanded;
    console.log(this.menuExpanded);
  }

  // scrollFunction(mainEl: HTMLElement) {
  //   if (mainEl.scrollTop > 80 || mainEl.scrollTop > 80) {
  //     document.getElementById('#navbar').classList.remove('transparent');
  //     console.log('not transparent');
  //   } else {
  //     document.getElementById('#navbar').classList.add('transparent');
  //     console.log('transparent');
  //   }
  // }
}
