import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Equipamento } from '../model/equipamentos.entities';
import { catchError, Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
 
   URL = 'http://localhost:3000/equipamentos';

   headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}



  // save
  create(data: any): Observable<any> {
    let API_URL = `${this.URL}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }


  getById(id: number): Promise<any>{
    return this.httpClient.get<any>(`${this.URL}/${id}`).toPromise();
  }

  // Listagem de equipamentos
  list() {
    return this.httpClient.get(`${this.URL}`);
  }


  // atualizar equipamento
  update(id: number, data: Equipamento): Observable<any> {
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
    





  
 

  // addEquipamento(equipamento: Equipamento) {
  //   this.equipamentos.push(equipamento);
  //   if(localStorage.getItem(Constants.EQUIPAMENTOS_KEY) === null) {
  //     this.equipamentos.push(equipamento)!;
  //     localStorage.setItem(Constants.EQUIPAMENTOS_KEY, JSON.stringify(this.equipamentos));
  //   } else {
  //     this.equipamentos = JSON.parse(localStorage.getItem(Constants.EQUIPAMENTOS_KEY)!);
  //     this.equipamentos.push(equipamento)!; 
  //     localStorage.setItem(Constants.EQUIPAMENTOS_KEY, JSON.stringify(this.equipamentos));
  //   }
  // }

 

  
  
  

}
