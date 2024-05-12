
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('f', { static: false })
  contactForm!: NgForm;

  onSubmit(form: NgForm){
    this.contactForm = form.value;
  }

}
