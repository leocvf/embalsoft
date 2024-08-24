import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { Livro } from "../../models/livro.model"
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formularios-livro',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formularios-livro.component.html',
  styleUrl: './formularios-livro.component.scss'
})
export class FormulariosLivroComponent implements OnInit  {
  livroForm: FormGroup;
  id: any;

  constructor(private fb: FormBuilder,private livroservice: LivroService,private router: Router,private route: ActivatedRoute) {
    this.livroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      ano: [null, Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    if(this.id != null){
      this.livroservice.getLivro( parseInt(this.id)).subscribe(data =>{
        this.livroForm.setValue({
          titulo: data.titulo,
          autor: data.autor,
          genero: data.genero,
          ano: data.ano,
        });
      });
    }
  }

  ngOnInit(): void {
   
  }
  onSubmit() {
    if (this.livroForm.valid) {
     
      console.log('Data:', this.livroForm.value);
      var livro: Livro = {
        titulo: this.livroForm.value.titulo,
        autor: this.livroForm.value.autor,
        genero: this.livroForm.value.genero,
        ano: this.livroForm.value.ano
      };
      if(this.id == null){
        this.livroservice.addLivro(livro).subscribe(()=>{
          this.router.navigate(['/']);
        });
      }else{
        livro.id = parseInt(this.id);
        this.livroservice.updateLivro(livro.id,livro).subscribe(()=>{
          this.router.navigate(['/']);
        });
      }
    }

  }
  voltar(){
    this.router.navigate(['/']);
  }

}
