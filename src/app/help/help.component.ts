import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help', 
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
digitado: number;
listaFiltrada: any;
lista = [
{nome: 'José', idade: 15},
{nome: 'Maria', idade: 17},
{nome: 'João', idade: 22},
{nome: 'Ana', idade: 25},
{nome: 'Carla', idade: 12},
{nome: 'Pedro', idade: 19},
{nome: 'Karol', idade: 55}
];


  constructor() { 
    this.digitado = 0;
  }

  ngOnInit(): void {
  }
  filtrarLista(): void {
    this.listaFiltrada = this.lista.filter(item => item.idade >=  this.digitado);
    console.log(this.listaFiltrada);
    this.lista = this.listaFiltrada;
    
  }

}
