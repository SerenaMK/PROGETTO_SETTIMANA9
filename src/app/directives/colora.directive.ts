import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
      this.ref.nativeElement.style.backgroundColor = 'yellow';
      this.ref.nativeElement.style.color = '#212529';
  }

}
