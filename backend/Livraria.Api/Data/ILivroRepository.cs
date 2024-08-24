using Livraria.Api.Models;
namespace Livraria.Api.Data
{
    public interface ILivroRepository
    {
        Task<IEnumerable<Livro>> GetLivros();
        Task<Livro> GetLivroId(int id);
        Task AddLivroId(Livro livro);
        Task UpdateLivro(Livro livro);
        Task DeleteLivro(int id);
    }
}