using Livraria.Api.DTOs;
using Livraria.Api.Models;
using Livraria.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Livraria.Api.Controller
{
    [ApiController]
    [Route("api/livros")]
    public class LivroController : ControllerBase
    {
        private readonly ILivroRepository _livroRepository;

        public LivroController(ILivroRepository livroRepository)
        {
            _livroRepository = livroRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LivroDTO>>> GetLivros()
        {
            var livro = await _livroRepository.GetLivros();
            var livroDTO = livro.Select(l => new LivroDTO
            {
                Id = l.Id,
                Titulo = l.Titulo,
                Autor = l.Autor,
                Genero = l.Genero,
                Ano = l.Ano,
            });
            return Ok(livroDTO);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<LivroDTO>>> GetLivro(int id)
        {
            var livro = await _livroRepository.GetLivroId(id);
            if (livro == null) return NotFound();

            var livroDTO = new LivroDTO
            {
                Id = livro.Id,
                Titulo = livro.Titulo,
                Autor = livro.Autor,
                Genero = livro.Genero,
                Ano = livro.Ano,
            };
            return Ok(livroDTO);
        }
        [HttpPost]
        public async Task<ActionResult> AddLivro(LivroDTO livrodto)
        {
            var livro = new Livro
            {
                Titulo = livrodto.Titulo,
                Autor = livrodto.Autor,
                Genero = livrodto.Genero,
                Ano = livrodto.Ano,
            };
            await _livroRepository.AddLivroId(livro);
            Console.WriteLine(livro.Id);
            var livroDTO = new LivroDTO
            {
                Id = livro.Id,
                Titulo = livro.Titulo,
                Autor = livro.Autor,
                Genero = livro.Genero,
                Ano = livro.Ano,
            };

            return CreatedAtAction(nameof(GetLivro), new { id = livro.Id }, livroDTO);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateLivro(int id, LivroDTO livrodto)
        {
            var livro = await _livroRepository.GetLivroId(id);
            if (livro == null) return NotFound();
            livro.Titulo = livrodto.Titulo;
            livro.Autor = livrodto.Autor;
            livro.Genero = livrodto.Genero;
            livro.Ano = livrodto.Ano;
            await _livroRepository.UpdateLivro(livro);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLivro(int id)
        {
            var livro = await _livroRepository.GetLivroId(id);
            if (livro == null) return NotFound();
            await _livroRepository.DeleteLivro(id);
            return NoContent();
        }
    }
}
