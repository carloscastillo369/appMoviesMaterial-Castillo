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
    purchaseavailable: [false, [Validators.required]],
    rentalavailable: [false, [Validators.required]],
    commingsoon: [false, [Validators.required]],
    purchaseprice: ['', [Validators.required]],
    rentalprice: ['', [Validators.required]],
    year: ['', [Validators.required]],
    runtime: ['', [Validators.required]],
    plot: ['', [Validators.required]],
    rated: ['', [Validators.required]],
    released: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    director: ['', [Validators.required]],
    writer: ['', [Validators.required]],
    actors: ['', [Validators.required]],
    language: ['', [Validators.required]],
    country: ['', [Validators.required]],
    awards: ['', [Validators.required]],
    cardimg: ['', [Validators.required]],
    posterimg: ['', [Validators.required]],
    bannerimg: ['', [Validators.required]],
    urltrailer: ['', [Validators.required]]
  })

  saveMovie(){
    this.moviesService.saveMovie(this.formAddMovie.value)
    .subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La película ha sido agregada',
        showConfirmButton: false,
        timer: 1500
      })
    })
    this.formAddMovie.reset();
  }

  isValidField (field:string){
    return this.formAddMovie.get(field)?.valid;
  }

  isInvalidField (field:string) {
    return (
      this.formAddMovie.get(field)?.invalid && 
      (this.formAddMovie.get(field)?.dirty || this.formAddMovie.get(field)?.touched)
    )
  }

}
