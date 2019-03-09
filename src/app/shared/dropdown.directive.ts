import { Directive, HostListener, OnInit, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  dropdownOpen: boolean = false;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  ngOnInit() {
  }

  @HostListener("click")
  onSelectorClicked(): void {
    this.dropdownOpen = !this.dropdownOpen;

    if(this.dropdownOpen) {
      this.renderer.addClass(this.hostElement.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, 'open');
    }
  }

}
