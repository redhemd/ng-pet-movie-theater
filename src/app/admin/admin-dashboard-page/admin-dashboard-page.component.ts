import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/client/common/interfaces';
import { MovieService } from 'src/app/client/common/movie.service';
import { AdminEditPageComponent } from '../admin-edit-page/admin-edit-page.component';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss'],
})
export class AdminDashboardPageComponent implements OnInit {
  listOfMovies = [];
  mSub: Subscription;
  mUnsub: Subscription;
  form: FormGroup;
  movie: Movie;

  constructor(
    public matDialog: MatDialog,
    public movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mSub = this.movieService.getAll().subscribe((movies) => {
      this.listOfMovies = movies;
    });
  }

  ngOnDestroy() {
    if (this.mSub) {
      this.mSub.unsubscribe();
    }

    if (this.mUnsub) {
      this.mUnsub.unsubscribe();
    }
  }

  delete(id) {
    this.movieService.delete(id).subscribe(() => {
      this.listOfMovies = this.listOfMovies.filter((movie) => {
        movie.id !== id;
      });
    });
  }
}
