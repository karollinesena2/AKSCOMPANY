import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help', 
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
digitado: string;
listaFiltrada: any;
lista = [
{nome: 'Possui delivery?', string: 'sim'},
{nome: 'Entrega pra outros estados?', string: 'sim'},
{nome: 'Como fazer parte da equipe AKS?', string: 'envie seu curriculo no email : sunflowercuiabá@hotmail.com'},
{nome: 'Possui venda por atacado?', string: 'Sim, falar com o wpp de revendas numero 65 9 9999-8888'},
{nome: 'Como efetuar a troca de um produto?', string: 'Solicite troca de produtos por meio do whatsApp, possui um prazo de 7 dias'},
];


  constructor() { 
    this.digitado = '';
  }

  ngOnInit(): void {
  }
  filtrarLista(): void {
    this.listaFiltrada = this.lista.filter(item => item.nome = this.digitado);
    console.log(this.listaFiltrada);
    this.lista = this.listaFiltrada;
    
  }

}
