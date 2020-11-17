import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Input()

  sideOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideOpen = !this.sideOpen;
  }

}
