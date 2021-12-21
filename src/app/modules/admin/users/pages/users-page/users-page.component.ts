import { Component, OnInit } from '@angular/core';
import { UserRegisteredModel } from 'src/app/core/models/user-registered.model';
import { UsersService } from 'src/app/modules/admin/users/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users:UserRegisteredModel[] = [];

  displayedColumns: string[] = ['id','nombre', 'email', 'accion'];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => (this.users = res));
  }

  deleteUser(id:string){
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
        this.usersService.deleteUser(id).subscribe((res)=>{
          this.usersService.getUsers().subscribe(res => (this.users = res));
        })
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        )
      }
    })
  }

}
