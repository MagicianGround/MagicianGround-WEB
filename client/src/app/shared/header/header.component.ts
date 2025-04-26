import { Component } from '@angular/core';
import { LenguajesComponent } from '../../compoents/lenguajes/lenguajes.component';

@Component({
  selector: 'app-header',
  imports: [
    LenguajesComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
