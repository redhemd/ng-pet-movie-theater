import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-main-layout',
  templateUrl: './client-main-layout.component.html',
  styleUrls: ['./client-main-layout.component.scss'],
})
export class ClientMainLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAdmin() {
    this.router.navigate(['admin']);
  }
}
