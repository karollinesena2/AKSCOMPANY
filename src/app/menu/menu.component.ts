import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  looks = [
    {name: "Vestidos"},
    {name: "Conjuntos"},
    {name: "Saias"},
    {name: "Croppes"},
    {name: "Blusas"},
    {name: "Calças"},
    {name: "Pantalonas"},
    {name: "Short-jeans"}
  ];

  acessories = [
    {name: "Colares"},
    {name: "Choquer"},
    {name: "Pulseiras"},
    {name: "Brincos"},
    {name: "Pingentes"}
  ];

  shoes = [
    {name: "Sandálias"},
    {name: "Saltos"},
    {name: "Rasteirinhas"},
    {name: "Botas"},
    {name: "Scarpins"}
  ];

  bags = [ 
    {name: "Ecobegs"},
    {name: "Bigbags"},
    {name: "Bagchain"},
  ];

  public openLooks : boolean;
  
  public openAcessories : boolean;

  public openShoes : boolean;

  public openBags : boolean;

  constructor() {

    this.openLooks = false; 

    this.openAcessories = false;

    this.openShoes = false;

    this.openBags = false;

  }
  
  ngOnInit(): void {

  }

  showLooks() {

    this.openLooks = !this.openLooks;
  }

  showAcessories() {

    this.openAcessories = !this.openAcessories;
  }

  showShoes() {
    this.openShoes = !this.openShoes;
  }

  showBags () {
    this.openBags = !this.openBags;

  }

  

 
}
