import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MoviesService } from '../../services/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies!:any;

  @ViewChild(MatTable) table!: MatTable<any>;
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
      confirmButtonText: 'Sí, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.moviesService.deleteMovie(id).subscribe((res)=>{
          console.log('movie deleted');
          
        })
        this.table.renderRows();
        Swal.fire(
          'Eliminado!',
          'La película ha sido eliminada.',
          'success'
        )
      }
    })
  }

}
