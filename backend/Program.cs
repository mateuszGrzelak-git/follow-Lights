using backend;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Rejestracja DbContext z konfiguracją połączenia
builder.Services.AddDbContext<DatabaseInit>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection"); // Upewnij się, że masz ten wpis w appsettings.json
    options.UseSqlServer(connectionString, sqlOptions =>
    {
        sqlOptions.EnableRetryOnFailure();
    });
});

// Rejestracja IUserRepository i UserRepository
builder.Services.AddScoped<UserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
