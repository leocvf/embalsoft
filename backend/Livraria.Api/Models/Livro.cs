﻿namespace Livraria.Api.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public required string Titulo { get; set; }
        public required string Autor { get; set; }
        public required string Genero { get; set; }
        public int Ano { get; set; }
    }
}
