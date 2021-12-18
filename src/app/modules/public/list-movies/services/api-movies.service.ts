import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.model';
import MoviesJson from 'src/assets/data/api-movies.json';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/";

  //movies: MovieModel[] = MoviesJson;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.urlAPI + 'movies');
  }

  //getMovies(){
  //  return this.movies;
  //}

  //getInfoMovie(id:number){
  //  return this.movies.filter(movie => movie.id == id)[0];
  //}

}
