import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

heroes:any[];
termino:string;
  constructor(private  activatedRouter:ActivatedRoute,
     private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    })
    
  }
  
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
