import { Component, OnInit } from '@angular/core';
import {Clientes} from '../clientes'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  nacionalidad=['','El Salvador','Mexico','Rusia','Mongolia'];
  cliente=new Clientes(1,'','',23);

  constructor() { }

  ngOnInit(): void {
  }

}
