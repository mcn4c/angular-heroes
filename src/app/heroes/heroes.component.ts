import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes= HEROES;
  selectedHero?: Hero;

  
  constructor() { }
  
  //ngOnIt is a lifecycle hook.  Angular calls ngOnIt shortly after creating a component
  //it's a good place to put initialization logic
  ngOnInit(): void {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 

}
