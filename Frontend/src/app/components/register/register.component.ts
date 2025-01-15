import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule,CommonModule,HttpClientModule],
  providers:[AuthService]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = { username: this.name, email: this.email, password: this.password };
    this.authService.register(user).subscribe({
      
      next: (res) => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: () => alert('Registration failed'),
    });
  }
}
