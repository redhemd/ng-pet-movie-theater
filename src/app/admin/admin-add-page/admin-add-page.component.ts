import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/client/common/movie.service';

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.scss'],
})
export class AdminAddPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      genre: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      poster: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const movie = {
      genre: this.form.value.genre,
      title: this.form.value.title,
      year: this.form.value.year,
      country: this.form.value.country,
      poster: this.form.value.poster,
      date: new Date(),
      idNumber: Math.random(),
    };

    this.movieService.create(movie).subscribe((res) => {
      console.log(res);
      this.submitted = false;
    });
  }
}
