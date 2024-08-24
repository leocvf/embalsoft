import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-listar-livros',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './listar-livros.component.html',
  styleUrl: './listar-livros.component.scss'
})
export class ListarLivrosComponent implements OnInit {
    livros: Livro[] = [];
    
    constructor(private livroservice: LivroService){}
    ngOnInit(): void{
      this.listaLivros();
    }
    listaLivros(): void {
      this.livroservice.getLivros().subscribe((data: Livro[])=>{
        this.livros = data;
        console.log(this.livros)
      });
    }
} 
