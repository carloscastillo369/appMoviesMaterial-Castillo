import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieModel } from 'src/app/core/models/movie.model';

import { ApiMovieService } from 'src/app/modules/public/detail-movie/services/api-movie.service';


@Component({
  selector: 'app-detail-movie-page',
  templateUrl: './detail-movie-page.component.html',
  styleUrls: ['./detail-movie-page.component.css']
})
export class DetailMoviePageComponent implements OnInit {

  public movie!: MovieModel;
  public hours: number = 0;
  public mins: number = 0;

  constructor(
    private _apiMovieService: ApiMovieService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this._apiMovieService.getMovie(params.id).subscribe((res: MovieModel) => {
        this.movie = res;
        this.MinToHour(this.movie.runtime);
      });
    })
  }

  MinToHour(number: number){
    this.hours = Math.floor(number/60);
    this.mins = number % 60;
  }

}
