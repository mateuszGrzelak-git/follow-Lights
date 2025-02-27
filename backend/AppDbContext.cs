using backend.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSet dla tabeli Users
        public DbSet<User> Users { get; set; }
        public DbSet<UserProgress> UserProgresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var userId = Guid.NewGuid();

            modelBuilder.Entity<User>().HasData(
                new User { Id = userId, Username = "test_user", Email = "test@example.com", Password = "password" });

            modelBuilder.Entity<UserProgress>().HasData(
                new UserProgress { Id = Guid.NewGuid(), UserId = userId, Rank = 0 });
        }

    }
}
