import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-livros',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './listar-livros.component.html',
  styleUrl: './listar-livros.component.scss'
})
export class ListarLivrosComponent implements OnInit {
    livros: Livro[] = [];
    
    constructor(private livroservice: LivroService,private router: Router){}
    ngOnInit(): void{
      this.listaLivros();
    }
    listaLivros(): void {
      this.livroservice.getLivros().subscribe((data: Livro[])=>{
        this.livros = data;
      });
    }
    editar(id: any){
      this.router.navigate(['formularios-livro', id]);
    }
    excluir(id: any){
      this.livroservice.deleteLivro(id).subscribe({
        next: () => {
          this.listaLivros();
        },
        error: (err) => console.error('Delete failed', err)
      });
    }
} 
