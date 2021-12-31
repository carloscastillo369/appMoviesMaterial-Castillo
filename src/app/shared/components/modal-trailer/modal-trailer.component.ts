import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MovieModel } from 'src/app/core/models/movie.model';


@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.css']
})
export class ModalTrailerComponent implements OnInit {

  movieTitle: string;
  urlTrailer: SafeResourceUrl;

  constructor( 
    private sanitizer: DomSanitizer, 
    @Inject(MAT_DIALOG_DATA) public data: MovieModel 
  ) { 
    this.movieTitle = this.data.title;
    this.urlTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.urltrailer);
    }

  ngOnInit(): void {
  }

}
