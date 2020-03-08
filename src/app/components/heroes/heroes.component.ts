import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]  =  [];
  constructor(  private  _heroesService:HeroesService,
               private  _router:Router ) {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("OnInit");

    this.heroes  =  this._heroesService.getHeroes();
console.table(this.heroes);
  }

  verHeroe(indx:number){
    this._router.navigate(['/heroe',indx])
  }

}
