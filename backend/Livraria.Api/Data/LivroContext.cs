using Microsoft.EntityFrameworkCore;
using Livraria.Api.Models;

namespace Livraria.Api.Data
{
    public class LivroContext : DbContext 
    {
        public LivroContext(DbContextOptions<LivroContext> options) : base(options){ }
        public DbSet<Livro> Livros { get; set; }
    }
}
