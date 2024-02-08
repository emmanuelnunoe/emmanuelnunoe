import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @ViewChild('textToCopy') textToCopy!: ElementRef<HTMLParagraphElement>;
  public isClicked: boolean = false;

  copyToClipboard() {
    const email: string = "enunospace@gmail.com";
    const text: string = (this.textToCopy.nativeElement.textContent?.trim()) == undefined ? email : this.textToCopy.nativeElement.textContent?.trim();
    if (text != undefined && email === text) {
      navigator.clipboard.writeText(text);
      this.isClicked = !this.isClicked;
    }
  }
  

}
