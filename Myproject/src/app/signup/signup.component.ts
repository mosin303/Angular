import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User submitted:', this.user);
    // Perform signup logic here (e.g., send data to backend API)
    // You can use Angular's HttpClient module for making HTTP requests
}
}
