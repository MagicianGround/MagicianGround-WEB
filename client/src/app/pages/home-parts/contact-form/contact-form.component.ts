import { Component } from '@angular/core';
import { InputDarkTransparentComponent } from '../../../components/input-dark-transparent/input-dark-transparent.component';

@Component({
  selector: 'app-contact-form',
  imports: [
    InputDarkTransparentComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

}
