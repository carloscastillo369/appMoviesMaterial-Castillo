import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() movie!:MovieModel;

  constructor() { }

  ngOnInit(): void {
  }

}
