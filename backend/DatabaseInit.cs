using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using backend.Domain;

namespace backend
{
    public class DatabaseInit : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
