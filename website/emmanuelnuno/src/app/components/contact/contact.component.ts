import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  @ViewChild('textToCopy') textToCopy!: ElementRef<HTMLParagraphElement>;

  copyToClipboard() {
    const email: string = "enunospace@gmail.com";
    const text: string = (this.textToCopy.nativeElement.textContent?.trim()) == undefined ? "" : this.textToCopy.nativeElement.textContent?.trim();
    if (text != undefined) {
      navigator.clipboard.writeText(text);

    }
  }
  

}
