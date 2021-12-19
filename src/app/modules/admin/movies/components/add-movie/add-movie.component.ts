import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(
    private moviesService: MoviesService, 
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formAddMovie: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    year: ['', [Validators.required]],
    saleprice: ['', [Validators.required]],
    rentalprice: ['', [Validators.required]],
    canberent: ['', [Validators.required]],
    canbesold: ['', [Validators.required]],
    commingsoon: ['', [Validators.required]],
    noavailable: ['', [Validators.required]],
    rated: ['', [Validators.required]],
    released: ['', [Validators.required]],
    runtime: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    director: ['', [Validators.required]],
    writer: ['', [Validators.required]],
    actors: ['', [Validators.required]],
    plot: ['', [Validators.required]],
    language: ['', [Validators.required]],
    country: ['', [Validators.required]],
    awards: ['', [Validators.required]],
    cardimg: ['', [Validators.required]],
    posterimg: ['', [Validators.required]],
    bannerimg: ['', [Validators.required]],
    urltrailer: ['', [Validators.required]]
  })

  saveMovie(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'La película ha sido agregada',
      showConfirmButton: false,
      timer: 1500
    })
    this.moviesService.saveMovie(this.formAddMovie.value)
    .subscribe((data) => {
      console.log('created a movie');
    })
    this.formAddMovie.reset();
  }

}
