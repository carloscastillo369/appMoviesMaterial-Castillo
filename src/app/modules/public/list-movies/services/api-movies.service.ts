import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieModel } from 'src/app/core/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/movies/";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.urlAPI);
  }

}
