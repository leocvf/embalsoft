namespace Livraria.Api.DTOs
{
    public class LivroDTO
    {
        public int Id { get; set; }
        public required string Titulo { get; set; }
        public required string Autor { get; set; }
        public required string Genero { get; set; }
        public int Ano { get; set; }

    }
}
