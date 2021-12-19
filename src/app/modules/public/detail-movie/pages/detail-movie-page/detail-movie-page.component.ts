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

  movie!: MovieModel;

  constructor(
    private apiMovieService: ApiMovieService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.apiMovieService.getMovie(params.id).subscribe((res: MovieModel) => {
        this.movie = res; 
      });
    })
    //this.activatedRoute.params.subscribe((params) => {
    //  this.infoMovie = this.apiMoviesService.getInfoMovie(params.id);
    //})
  }

}
