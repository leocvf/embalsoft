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

  addLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiURL, livro);
  }
  
  deleteLivro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

}
