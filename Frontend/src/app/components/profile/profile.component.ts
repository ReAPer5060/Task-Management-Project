import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormsModule]
})
export class ProfileComponent implements OnInit {
  name: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Fetch user details (replace with actual user fetching logic)
    this.name = 'John Doe';
    this.email = 'johndoe@example.com';
  }

  updateProfile() {
    const updatedUser = { name: this.name, email: this.email };
    // Simulating update API call
    this.authService.register(updatedUser).subscribe({
      next: () => {
        alert('Profile updated successfully');
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Error updating profile'),
    });
  }
}
