using backend.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        // Konstruktor, w którym przekazywana jest konfiguracja połączenia do bazy danych
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSet dla tabeli Users
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Możesz tutaj dodać dodatkowe konfiguracje dla bazy danych, np. ustawienie klucza głównego
            modelBuilder.Entity<User>()
                        .HasKey(u => u.Id);  // Ustawienie klucza głównego dla tabeli Users
        }
    }
}
