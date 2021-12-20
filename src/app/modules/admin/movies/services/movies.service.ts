import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/core/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlAPI = "https://61bd6cde2a1dd4001708a047.mockapi.io/api/movies/";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this.urlAPI);
  }

  getMovie(id:string): Observable<MovieModel>{
    return this.http.get<MovieModel>(this.urlAPI + id);
  }

  saveMovie(movie: MovieModel){
    return this.http.post<MovieModel>(this.urlAPI, movie);
  }

  updateMovie(movie: MovieModel, id: string){
    return this.http.put<MovieModel>(this.urlAPI + id, movie);
  }

  deleteMovie(id: string){
    return this.http.delete<MovieModel>(this.urlAPI + id);
  }
}
