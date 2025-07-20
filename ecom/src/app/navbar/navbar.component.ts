import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
