using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class DatabaseInit : DbContext
    {
        SqlConnection conn;

        public DatabaseInit()
        {
            conn = new SqlConnection();
            conn.Open();
        }

        ~DatabaseInit()
        {
            conn.Close();
        }
    }
}
