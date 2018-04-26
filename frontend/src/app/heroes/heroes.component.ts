import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  unhappyUsers: Hero[];
  happyUsers: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHappyUsers();
    this.getUnhappyUsers();
  }

  getHappyUsers(): void {
    this.heroService.getTopHappyUsers()
    .subscribe(heroes => {
      console.log(heroes);
      this.happyUsers = heroes.map(x => Object.assign(new Hero(), x))
    });
  }

  getUnhappyUsers(): void {
    this.heroService.getTopUnhappyUsers()
    .subscribe(heroes => {
      console.log(heroes)
      this.unhappyUsers = heroes.map(x => Object.assign(new Hero(), x))
     });
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/