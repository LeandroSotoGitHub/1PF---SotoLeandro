import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {

  constructor(private ElementRef: ElementRef, private Renderer: Renderer2) {}

  ngOnInit() {
    this.Renderer.setStyle(this.ElementRef.nativeElement, 'font-size', '20px');
  }

}
