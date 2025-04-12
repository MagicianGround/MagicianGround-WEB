import { Component } from '@angular/core';
import { InitialHomeComponent } from '../home-parts/initial-home/initial-home.component';
import { WhoWeAreComponent } from '../home-parts/who-we-are/who-we-are.component';
import { HowWeWorkComponent } from '../home-parts/how-we-work/how-we-work.component';
import { OurObjetiveComponent } from '../home-parts/our-objetive/our-objetive.component';
import { ContactFormComponent } from '../home-parts/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  imports: [
    InitialHomeComponent,
    WhoWeAreComponent,
    OurObjetiveComponent,
    HowWeWorkComponent,
    ContactFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
