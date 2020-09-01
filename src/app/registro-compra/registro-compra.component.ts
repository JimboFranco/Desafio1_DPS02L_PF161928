import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Producto } from '../producto';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro-compra',
  templateUrl: './registro-compra.component.html',
  styleUrls: ['./registro-compra.component.css']
})
export class RegistroCompraComponent implements OnInit {

  cliente = new Cliente(0, '');
  compra: any;
  producto1 = new Producto(1,'Arroz san julian','2pack de arroz san julian',1.40);
  producto2 = new Producto(2,'Frijol Don Frijol','1 lb de frijo Don Frijol',1.43);
  producto3 = new Producto(3,'Papel higienico Dany','4 rollos 1000 hojas',2.10);
  producto4 = new Producto(4,'Agua cristal','Garrafon de agua cristal',2.50);
  producto5 = new Producto(5,'Pilsener lata','pilsener 335ml',1.05);

  idP:number;
  desc: number ;
  total: number;
  cont: number ;
  regProductos= [];
  regClientes= [];
  regCompra= [];


  constructor() { }

  ngOnInit(): void {
    this.regProductos.push(this.producto1);
    this.regProductos.push(this.producto2);
    this.regProductos.push(this.producto3);
    this.regProductos.push(this.producto4);
    this.regProductos.push(this.producto5);
    this.idP=0;
    this.cont =0;
    this.total=0;
    this.desc =0;
  }

  registraCompra(f:NgForm){
    this.cont = 1;
    for (let i = 0; i < this.regCompra.length; i++) {
      if (this.regCompra[i].dui == this.cliente.dui) {
        this.cont+=1;
      }
    }
    if(this.cont >= 2){
      this.desc = 5;
    }
    if(this.cont >= 4){
      this.desc = 10;
    }
    if(this.cont < 2){
      this.desc = 0;
    }
    this.total = this.regProductos[this.idP-1].precio - (this.regProductos[this.idP-1].precio*(this.desc/100));
    
    var tot = this.total.toFixed(2);
    
    this.compra = { "nombreC": this.cliente.nombre, "dui": this.cliente.dui, "nombreP": this.regProductos[this.idP-1].nombre, "precio": this.regProductos[this.idP-1].precio,"desc": this.desc, "Tot": tot };
    this.regCompra.push(this.compra);

    f.reset();
  }


}
