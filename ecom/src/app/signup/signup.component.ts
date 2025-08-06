import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-signup',
  standalone: true, 
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['user'] // default role
    });
  }

  onSignup(): void {
    console.log('Signup clicked:', this.signupForm.value); 

    if (this.signupForm.invalid) {
      alert('Please fill in all fields correctly');
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        console.error('Signup error:', err);
        alert('Signup failed: ' + err.error.message);
      }
    });
  }
}
