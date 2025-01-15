import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,HttpClientModule,CommonModule],
  providers:[AuthService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // console.log(`Logging in with username: ${this.username}`);
    
      const user = {username:'', email: this.username, password: this.password };
      this.authService.login(user).subscribe({
        next: (res:any) => {
          console.log("$$$$$$$$",res);
          if(res && res?.id){
            alert('Login successful');
          localStorage.setItem("id",res?.id);
          localStorage.setItem("username",res?.username);
          localStorage.setItem("email",res?.email);
            this.router.navigate(['/dashboard']);
          }
          
        },
        error: () => alert('login failed'),
      });
    
  }
}
