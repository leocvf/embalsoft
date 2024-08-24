using Livraria.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Livraria.Api.Data
{
    public class LivroRepository : ILivroRepository
    {
        private readonly LivroContext _context;

        public LivroRepository(LivroContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Livro>> GetLivros()
        {
            return await _context.Livros.ToListAsync();
        }
        public async Task<Livro> GetLivroId(int id)
        {
            return await _context.Livros.FindAsync(id);
        }
        public async Task AddLivroId(Livro livro)
        {
            await _context.Livros.AddAsync(livro);
            await _context.SaveChangesAsync();
            
        }
        public async Task UpdateLivro(Livro livro)
        {
            _context.Livros.Update(livro);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteLivro(int id)
        {
            var livro = await _context.Livros.FindAsync(id);
            if(livro != null)
            {
                _context.Livros.Remove(livro);
                await _context.SaveChangesAsync();
            }
        }
    }
}
