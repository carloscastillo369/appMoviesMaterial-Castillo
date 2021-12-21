import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  users:any;

  displayedColumns: string[] = ['id','nombre', 'email', 'accion'];

  constructor(private _ordersService: OrdersService) { }

  ngOnInit(): void {
    this._ordersService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  deleteOrder(id:string){
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
        this._ordersService.deleteOrder(id).subscribe((res)=>{
          this._ordersService.getUsers().subscribe(res => (this.users = res));
        })
        Swal.fire(
          'Eliminado!',
          'La película ha sido eliminada.',
          'success'
        )
      }
    })
  }

}
