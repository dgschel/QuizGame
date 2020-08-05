import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel;
  carouselConfig: NguCarouselConfig;
  testimonials;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.testimonials = [
      {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
        img: '#',
        name: 'David-Göschel',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
        img: '#',
        name: 'David-Göschel',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
        img: '#',
        name: 'David-Göschel',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
        img: '#',
        name: 'David-Göschel',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
        img: '#',
        name: 'David-Göschel',
      },
    ]

    this.carouselConfig = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 250,
      interval: { timing: 4000, initialDelay: 1000 },
      loop: true,
      point: {
        visible: true
      },
      load: 1,
      velocity: 0,
      touch: true,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
