import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  downloadMyCv()
  {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/Emmanuel Nuño Estrella- Computer Engineer 2024.pdf');
    link.setAttribute('download', `Emmanuel Nuño Estrella- Computer Engineer 2024.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
