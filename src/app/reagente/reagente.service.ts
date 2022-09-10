<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Reagente } from '../model/reagentes.entities';
import { Constants } from '../util/constants';
=======
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Reagente } from '../model/reagentes.entities';

>>>>>>> feature-atividade-12

@Injectable({
  providedIn: 'root'
})
export class ReagenteService {
<<<<<<< HEAD
  reagentes: Reagente[] = [];

  constructor() { }

  addReagente(reagente: Reagente) {
    this.reagentes.push(reagente);
    if(localStorage.getItem(Constants.REAGENTES_KEY) === null) {
      this.reagentes.push(reagente)!;
      localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
    } else {
      this.reagentes = JSON.parse(localStorage.getItem(Constants.REAGENTES_KEY)!);
      this.reagentes.push(reagente)!; 
      localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
    }
  }
=======

  URL = 'http://localhost:3000/reagentes';

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  reagentes: Reagente[] = [];

  constructor(private httpClient: HttpClient) { }


  // salva reagente
  create(data: any): Observable<any> {
    let API_URL = `${this.URL}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  getById(id: number): Promise<Reagente>{
    return this.httpClient.get<any>(`${this.URL}/${id}`).toPromise();
  }

  // Listagem de Reagentes
  list() {
    return this.httpClient.get(`${this.URL}`);
  }

  // atualizar equipamento
  update(id: number, data: Reagente): Observable<any> {
    let API_URL = `${this.URL}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.headers }).pipe();
    
  }

   // Delete Reagente
   delete(id: number): Observable<any> {
    var API_URL = `${this.URL}/${id}`;
    return this.httpClient.delete(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ops! Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Código retornado de back-end ${error.status}, ` +
        `corpo é: ${error.error}`);
    }
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };


  // addReagente(reagente: Reagente) {
  //   this.reagentes.push(reagente);
  //   if(localStorage.getItem(Constants.REAGENTES_KEY) === null) {
  //     this.reagentes.push(reagente)!;
  //     localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
  //   } else {
  //     this.reagentes = JSON.parse(localStorage.getItem(Constants.REAGENTES_KEY)!);
  //     this.reagentes.push(reagente)!; 
  //     localStorage.setItem(Constants.REAGENTES_KEY, JSON.stringify(this.reagentes));
  //   }
  // }
>>>>>>> feature-atividade-12
}
