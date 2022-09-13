import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Vidraria } from '../model/vidrarias.entities';


@Injectable({
  providedIn: 'root'
})
export class VidrariaService {

  URL = 'http://localhost:3000/vidraria';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  vidrarias: Vidraria[] = [];

  constructor(private httpClient: HttpClient) { }


  //Save vidraria
  create(data: any): Observable<any> {
    let API_URL = `${this.URL}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }

  //Lista uma vidraria 
  getById(id: number): Observable<any> {
    let API_URL = `${this.URL}/${id}`;
    return this.httpClient.get<any>(API_URL)
    .pipe(
      catchError(this.handleError)
    )
  }

  // Listagem de Vidraria
  list() {
    return this.httpClient.get(`${this.URL}`).pipe(catchError(this.handleError));
  }

  // atualizar Vidraria
  update(id: number, data: Vidraria): Observable<any> {
    let API_URL = `${this.URL}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.headers }).pipe();

  }

  // Delete equipamento
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



  // addVidraria(vidraria: Vidraria) {
  //   this.vidrarias.push(vidraria);
  //   if(localStorage.getItem(Constants.VIDRARIA_KEY) === null) {
  //     this.vidrarias.push(vidraria)!;
  //     localStorage.setItem(Constants.VIDRARIA_KEY, JSON.stringify(this.vidrarias));
  //   } else {
  //     this.vidrarias = JSON.parse(localStorage.getItem(Constants.VIDRARIA_KEY)!);
  //     this.vidrarias.push(vidraria)!; 
  //     localStorage.setItem(Constants.VIDRARIA_KEY, JSON.stringify(this.vidrarias));
  //   }
  // }
}
