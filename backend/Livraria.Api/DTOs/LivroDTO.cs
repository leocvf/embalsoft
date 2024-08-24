namespace Livraria.Api.DTOs
{
    public class LivroDTO
    {
        public required string Titulo { get; set; }
        public required string Autor { get; set; }
        public required string Genero { get; set; }
        public int Ano { get; set; }

    }
}
