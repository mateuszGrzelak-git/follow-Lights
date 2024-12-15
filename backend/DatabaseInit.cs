using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using backend.Domain;

namespace backend
{
    public class DatabaseInit : DbContext
    {
    	public DatabaseInit(DbContextOptions<DatabaseInit> options) : base(options) { }
    	public DbSet<User> Users { get; set; }

    	protected override void OnModelCreating(ModelBuilder modelBuilder)
    	{
        	modelBuilder.Entity<User>().HasData(
            	new User { Id = Guid.NewGuid(), Username = "test_user", Email = "test@example.com", Password = "password"});
    	}
    }
}
