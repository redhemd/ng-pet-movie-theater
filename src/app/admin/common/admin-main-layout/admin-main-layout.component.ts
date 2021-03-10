import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client/common/auth.service';
import { AdminAddPageComponent } from '../../admin-add-page/admin-add-page.component';

@Component({
  selector: 'app-admin-main-layout',
  templateUrl: './admin-main-layout.component.html',
  styleUrls: ['./admin-main-layout.component.scss'],
})
export class AdminMainLayoutComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addMovie() {
    this.matDialog.open(AdminAddPageComponent);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  logout($event) {
    $event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
