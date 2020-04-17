import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Brote } from './models/brote';

@Injectable({
  providedIn: 'root'
})
export class BrotesService {
  private brotesUrl = '/api/brotes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getBrotes(): Observable<Brote[]> {
    return this.http.get<Brote[]>(this.brotesUrl)
    .pipe(tap(_ => this.log('fetched brotes')),
      catchError(this.handleError<Brote[]>('getBrotes', [])));
  }
  /** GET hero by id. Will 404 if id not found *//*
  getHero(id: number): Observable<Subject> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Subject>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Subject>(`getHero id=${id}`))
    );
  }*/

  /** PUT: update the hero on the server */
  updateBrote (brote: Brote): void {
    //return this.http.put(this.brotesUrl, brote, this.httpOptions).pipe(tap(_ => this.log(`updated hero id=${brote.nombre}`)), catchError(this.handleError<any>('updateHero'))
    this.http.put(this.brotesUrl, brote, this.httpOptions).subscribe( res => { console.log(res) });
  }

  /** POST: add a new hero to the server */
  addBrote (brote: Brote): Observable<Brote> {
    this.messageService.add("addBrote"+this.brotesUrl);
    return this.http.post<Brote>(this.brotesUrl, brote, this.httpOptions).pipe(
      tap((newBrote: Brote) => this.log(`added brote w/ id=${newBrote.nombre}`)),
      catchError(this.handleError<Brote>('addBrote'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteBrote (brote: String): Observable<Brote> {
    const id = /*typeof brote === 'number' ? brote : */brote;
    const url = `${this.brotesUrl}/${id}`;

    this.messageService.add("deleteBrote()"+url);

    return this.http.delete<Brote>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Brote>('deleteBrote'))
    );
  }

  /** Log a BroteService message with the MessageService */
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
