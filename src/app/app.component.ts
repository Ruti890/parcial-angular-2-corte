import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigacionComponent } from './navigacion/navigacion.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavigacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-first-steps';

}
