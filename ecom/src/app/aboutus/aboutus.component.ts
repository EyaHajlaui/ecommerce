import { Component, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  isVisible = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;

    const whoSection = this.el.nativeElement.querySelector('.who-we-are');
    if (whoSection) {
      const rect = whoSection.getBoundingClientRect();
      if (rect.top <= windowHeight - 100) {
        this.renderer.addClass(whoSection, 'visible');
      }
    }

    const valueBoxes = this.el.nativeElement.querySelectorAll('.value-box');
    valueBoxes.forEach((box: HTMLElement) => {
      const rect = box.getBoundingClientRect();
      if (rect.top <= windowHeight - 50) {
        this.renderer.addClass(box, 'visible');
      }
    });
  }
}
