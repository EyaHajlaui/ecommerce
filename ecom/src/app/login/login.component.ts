import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  
  onLogin(): void {
    
    console.log('Login clicked:', this.loginForm.value);

    if (this.loginForm.invalid) {
      alert('Please enter your email and password.');
      return;
    }
    

    
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        
        console.log('Login success response:', res);

        alert('Login successful!');
        
        if(res.user.role==="admin"){
          this.authService.updateUserRole(res.user.role)
          this.router.navigate(['/add-product']);

        }else{

this.authService.updateUserRole(res.user.role)
          this.router.navigate(['/order'])    
        }
        
      },
      error: (err) => {
       
        console.error('Login error:', err);
        alert('Login failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }
}
