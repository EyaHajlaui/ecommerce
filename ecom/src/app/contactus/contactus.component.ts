import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor() {}

  onSubmit() {
    // Here you can handle form submission, e.g. send data to backend or show confirmation
    alert('Thank you for contacting us! We will get back to you shortly.');
  }

}
