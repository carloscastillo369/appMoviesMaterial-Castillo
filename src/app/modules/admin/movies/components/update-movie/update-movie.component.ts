import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from 'src/app/core/models/movie.model';
import { MoviesService } from '../../services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  movie!:MovieModel

  constructor(
    private moviesService: MoviesService, 
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.moviesService.getMovie(params.id).subscribe((res: MovieModel) => {
        this.movie = res;

        this.formUpdateMovie = this.fb.group({
          id: [this.movie.id],
          title: [this.movie.title],
          saleavailable: [this.movie.saleavailable],
          rentavailable: [this.movie.rentavailable],
          commingsoon: [this.movie.commingsoon],
          saleprice: [this.movie.saleprice],
          rentalprice: [this.movie.rentalprice],
          year: [this.movie.year],
          runtime: [this.movie.runtime],
          plot: [this.movie.plot],
          rated: [this.movie.rated],
          released: [this.movie.released],
          genre: [this.movie.genre],
          director: [this.movie.director],
          writer: [this.movie.writer],
          actors: [this.movie.actors],
          language: [this.movie.language],
          country: [this.movie.country],
          awards: [this.movie.awards],
          cardimg: [this.movie.cardimg],
          posterimg: [this.movie.posterimg],
          bannerimg: [this.movie.bannerimg],
          urltrailer: [this.movie.urltrailer]
        })
      });
    })
  }

  formUpdateMovie: FormGroup = this.fb.group({
    id: [''],
    title: [''],
    saleavailable: [false],
    rentavailable: [false],
    commingsoon: [false],
    saleprice: [0],
    rentalprice: [''],
    year: [''],
    runtime: [''],
    plot: [''],
    rated: [''],
    released: [''],
    genre: [''],
    director: [''],
    writer: [''],
    actors: [''],
    language: [''],
    country: [''],
    awards: [''],
    cardimg: [''],
    posterimg: [''],
    bannerimg: [''],
    urltrailer: ['']
  })

  updateMovie(id:string){
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.moviesService.updateMovie(this.formUpdateMovie.value, id)
        .subscribe((res)=>{
          Swal.fire('Guardado!', '', 'success')
        })
      } else if (result.isDenied) {
        this.formUpdateMovie = this.fb.group({
          id: [this.movie.id],
          title: [this.movie.title],
          saleavailable: [this.movie.saleavailable],
          rentavailable: [this.movie.rentavailable],
          commingsoon: [this.movie.commingsoon],
          saleprice: [this.movie.saleprice],
          rentalprice: [this.movie.rentalprice],
          year: [this.movie.year],
          runtime: [this.movie.runtime],
          plot: [this.movie.plot],
          rated: [this.movie.rated],
          released: [this.movie.released],
          genre: [this.movie.genre],
          director: [this.movie.director],
          writer: [this.movie.writer],
          actors: [this.movie.actors],
          language: [this.movie.language],
          country: [this.movie.country],
          awards: [this.movie.awards],
          cardimg: [this.movie.cardimg],
          posterimg: [this.movie.posterimg],
          bannerimg: [this.movie.bannerimg],
          urltrailer: [this.movie.urltrailer]
        })
        Swal.fire('Los cambios no fueron guardados', '', 'info')
      }
    })
  }
}
