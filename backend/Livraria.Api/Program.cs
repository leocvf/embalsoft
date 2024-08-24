using Livraria.Api.Data;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<LivroContext>(options =>
    options.UseInMemoryDatabase("Livraria"));
builder.Services.AddScoped<ILivroRepository, LivroRepository>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        policyBuilder => policyBuilder
            .WithOrigins("http://localhost:4200") // Allow requests from this origin
            .AllowAnyMethod() // Allow any HTTP method
            .AllowAnyHeader()); // Allow any headers
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseCors("AllowLocalhost");

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

