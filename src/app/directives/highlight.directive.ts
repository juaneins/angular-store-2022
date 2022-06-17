import { Directive, ElementRef, HostListener } from '@angular/core';
// las directivas sirven para realizar manipulaciones al DOM
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element: ElementRef) {
    //this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
