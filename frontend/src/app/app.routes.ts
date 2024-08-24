import { Routes } from '@angular/router';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';
import { FormulariosLivroComponent } from './components/formularios-livro/formularios-livro.component';
export const routes: Routes = [
    { path: '', redirectTo: '/listar-livros', pathMatch: 'full' },
    { path: 'listar-livros', component: ListarLivrosComponent },
    { path: 'formularios-livro', component: FormulariosLivroComponent },
];
