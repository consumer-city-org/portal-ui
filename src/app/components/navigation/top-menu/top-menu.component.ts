import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private router : Router) { 
    this.items = [
      {
          label: 'Portal',
          icon: PrimeIcons.HOME,
          command : () => this.router.navigateByUrl("portal")
      },
      {
          label: 'AWS',
          icon: PrimeIcons.CLOUD,
          command : () => this.router.navigateByUrl("aws")
      }
  ];
  }

  ngOnInit(): void {
  }

}
