import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'lightblue';

  }
  @HostListener('mouseenter') onMouseEnter() {
   this.eleRef.nativeElement.style.background = 'lightpink';

  }
  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => { 
      this.eleRef.nativeElement.style.background = 'lightblue';

    }, 5000);

  }
}
