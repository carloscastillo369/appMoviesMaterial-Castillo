import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.urlAPI + 'movies');
  }

  getMovie(id:string): Observable<MovieModel>{
    return this.http.get<MovieModel>(this.urlAPI + 'movies/' + id);
  }

  saveMovie(movie: MovieModel){
    return this.http.post<MovieModel>(this.urlAPI + 'movies', movie);
  }

  updateMovie(movie: MovieModel, id: string){
    return this.http.put<MovieModel>(this.urlAPI + 'movies/' + id, movie);
  }

  deleteMovie(id: string){
    return this.http.delete<MovieModel>(this.urlAPI + 'movies/' + id);
  }
}
