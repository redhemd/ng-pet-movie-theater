import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/client/common/interfaces';
import { MovieService } from 'src/app/client/common/movie.service';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss'],
})
export class AdminEditPageComponent implements OnInit {
  movie: Movie;
  form: FormGroup;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.movieService.getById(params['id']);
        })
      )
      .subscribe((movie) => {
        this.movie = movie;
        this.form = new FormGroup({
          genre: new FormControl(this.movie.genre, Validators.required),
          title: new FormControl(this.movie.title, Validators.required),
          year: new FormControl(this.movie.year, Validators.required),
          country: new FormControl(this.movie.country, Validators.required),
          poster: new FormControl(this.movie.poster, Validators.required),
        });
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.movieService
      .edit({
        ...this.movie,
        genre: this.form.value.genre,
        title: this.form.value.title,
        year: this.form.value.year,
        country: this.form.value.country,
        poster: this.form.value.poster,
        date: new Date(),
      })
      .subscribe((res) => {
        this.submitted = false;
        this.router.navigate(['/admin', 'dashboard']);
      });
  }
}
