import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  //the parameter simultaneously defines a private heroService property and identifies it as a HeroService
  //injection site

  //When angular creates a HeroesComponent, the dependency injection system sets the heroService parameter 
  //to the singleton instance of HeroService
  constructor(private heroService: HeroService) { }
  
  //ngOnIt is a lifecycle hook.  Angular calls ngOnIt shortly after creating a component
  //it's a good place to put initialization logic
  ngOnInit(): void {
    this.getHeroes();
  }
  
 

  //Observable.subscribe for when making request to remote server
  //waits for observvable to emit the array of heroes - which could happen now
  //or several minutes from now
  //the subscribe() method passes the emitted array to the callback, which sets the component's
  //heroes property
  //asynchronous approach
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)

  }
 

}
