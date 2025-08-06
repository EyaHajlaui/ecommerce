import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  role:any=null;
constructor(private service:AuthService){

}
  ngOnInit(): void {
    console.log(this.role);
    
    this.service.userRole$.subscribe((data:any)=>{
    this.role=data
    })
    console.log(this.role);

  }
  logout(){
    this.service.updateUserRole(null)
    //redirectionvers la page login 
  }

}
