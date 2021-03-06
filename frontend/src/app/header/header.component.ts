import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('sidenav') sidenav = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onSidenavClose() {
    this.sidenav.emit();
  }

}
