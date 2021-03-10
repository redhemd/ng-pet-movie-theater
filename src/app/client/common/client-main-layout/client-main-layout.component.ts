import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client-main-layout',
  templateUrl: './client-main-layout.component.html',
  styleUrls: ['./client-main-layout.component.scss'],
})
export class ClientMainLayoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  goToAdmin() {
    if (this.authService.isAuthentificated()) {
      this.router.navigate(['admin', 'dashboard']);
    } else {
      this.router.navigate(['admin']);
    }
  }
}
