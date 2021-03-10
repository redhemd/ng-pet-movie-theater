import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbResponse, Movie } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  create(movie) {
    return this.httpClient
      .post(`${environment.fbDbUrl}/movies.json`, movie)
      .pipe(
        map((res: FbResponse) => {
          return {
            ...movie,
            id: res.name,
            date: new Date(movie.date),
          };
        })
      );
  }

  getAll() {
    return this.httpClient.get(`${environment.fbDbUrl}/movies.json`).pipe(
      map((res) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date),
        }));
      })
    );
  }

  delete(id) {
    return this.httpClient.delete(`${environment.fbDbUrl}/movies/${id}.json`);
  }

  getById(id) {
    return this.httpClient.get(`${environment.fbDbUrl}/movies/${id}.json`).pipe(
      map((response: Movie) => {
        return {
          ...response,
          id,
          date: new Date(response.date),
        };
      })
    );
  }

  edit(movie: Movie) {
    return this.httpClient.patch(
      `${environment.fbDbUrl}/movies/${movie.id}/.json`,
      movie
    );
  }
}
