import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Subject } from './models/subject';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private heroesUrl = '/api/subjects';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getSubjects(): Observable<Subject[]> {

    this.log('fetched subjects');
    return this.http.get<Subject[]>(this.heroesUrl)
    .pipe(tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Subject[]>('getSubjects', [])));
  }
  /** GET hero by id. Will 404 if id not found *//*
  getHero(id: number): Observable<Subject> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Subject>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Subject>(`getHero id=${id}`))
    );
  }*/

  /** PUT: update the hero on the server 
  updateHero (hero: Subject): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }*/

  /** POST: add a new hero to the server */
  addSubject (subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.heroesUrl, subject, this.httpOptions).pipe(
      tap((newHero: Subject) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Subject>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server 
  deleteHero (hero: Subject | number): Observable<Subject> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Subject>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Subject>('deleteHero'))
    );
  }*/

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AsignaturasService: ${message}`);
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
