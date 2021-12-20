import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from 'src/app/core/models/movie.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies:MovieModel[] = [];

  displayedColumns: string[] = ['id','titulo', 'accion'];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(res => (this.movies = res));
    
  }

  deleteMovie(id: string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo!',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.moviesService.deleteMovie(id).subscribe((res)=>{
          this.moviesService.getMovies().subscribe(res => (this.movies = res));
        })
      }
      Swal.fire(
        'Eliminado!',
        'La película ha sido eliminada.',
        'success'
      )
    })
  }

}
