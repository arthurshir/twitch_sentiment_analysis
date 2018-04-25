import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:7555';  // URL to web api

  constructor(private http: HttpClient) {}

  // /** GET heroes from the server */
  // getHeroes (): Observable<Hero[]> {
  //   const url = `${this.heroesUrl}/getMostHappyUsers`;

  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  /** GET heroes from the server */
  getTopHappyUsers (): Observable<Hero[]> {
    const url = `${this.heroesUrl}/getMostHappyUsers`;
    console.log('Fetching from ' + url);
    return this.http.get<Hero[]>(url)
      .pipe( 
        tap(heroes => console.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getTopUnhappyUsers (): Observable<Hero[]> {
    const url = `${this.heroesUrl}/getMostUnhappyUsers`;
    console.log('Fetching from ' + url);
    return this.http.get<Hero[]>(url)
      .pipe( 
        tap(heroes => console.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/