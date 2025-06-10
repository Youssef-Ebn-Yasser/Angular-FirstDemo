import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]',

})


export class LightBoxDirective implements OnChanges {

  @Input('LightBox') highlightColor:string='darkblue';
  @Input() defaultColor:string="red";


  constructor(private eleRef:ElementRef) {
    console.log('inside custom directive');
  }
  ngOnChanges(): void {
        this.eleRef.nativeElement.style.border =`2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver(){   // decorator method function @HostListener('mouseover')
    this.eleRef.nativeElement.style.border =`2px solid ${this.highlightColor}`;
  }
  @HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.border =`2px solid ${this.defaultColor}`;
  }
}
