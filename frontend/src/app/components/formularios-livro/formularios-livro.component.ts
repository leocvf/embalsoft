import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { Livro } from "../../models/livro.model"
@Component({
  selector: 'app-formularios-livro',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formularios-livro.component.html',
  styleUrl: './formularios-livro.component.scss'
})
export class FormulariosLivroComponent implements OnInit  {
  livroForm: FormGroup;
  constructor(private fb: FormBuilder,private livroservice: LivroService) {
    this.livroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      ano: [null, Validators.required]
    });
  }

  ngOnInit(): void {

  }
  livro: Livro = {
    id: 1, // Replace with appropriate default or initial values
    titulo: 'Example Title',
    autor: 'Author Name',
    genero: 'Genre',
    ano: 2024
  };
  onSubmit() {
    if (this.livroForm.valid) {
      console.log('Data:', this.livroForm.value);
      const livro: Livro = {
        titulo: this.livroForm.value.titulo,
        autor: this.livroForm.value.autor,
        genero: this.livroForm.value.genero,
        ano: this.livroForm.value.ano
      };
      this.livroservice.addLivro(livro).subscribe();
    }

  }

}
