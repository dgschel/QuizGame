import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @ViewChild('headline', { static: true }) headline;

  constructor() { }

  ngOnInit(): void {
    new Typewriter(this.headline.nativeElement, {
      strings: ['enjoy', 'challenge'],
      autoStart: true,
      loop: true
    })
  }

}
