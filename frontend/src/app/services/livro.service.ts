import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiURL = `${environment.apiUrl}/livros`
  
  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.apiURL);
  }
  getLivro(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiURL}/${id}`);
  }
  addLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiURL, livro);
  }
  updateLivro(id: number, livro: Livro): Observable<void> {
    return this.http.put<void>(`${this.apiURL}/${id}`, livro);
  }

  deleteLivro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

}
