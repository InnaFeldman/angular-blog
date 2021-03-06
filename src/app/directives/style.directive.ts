import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyles!: {border?: string, fontWeight? :string, borderRadius?: string};

  @HostBinding('style.color') elColor = null; /// To change attribute

  constructor(private el: ElementRef, private r: Renderer2){
    //this.r.setStyle(this.el.nativeElement, 'color', 'pink')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter(){
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);

    ///hostBilnding
    //this.elColor = this.color;
  }

  @HostListener('mouseleave') onLeave() {
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);

    ///hostBilnding
    this.elColor = null;
  }
}
