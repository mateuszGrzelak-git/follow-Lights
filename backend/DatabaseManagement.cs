using Microsoft.Data.SqlClient;

namespace backend
{
    public class DatabaseManagement
    {
        SqlConnection conn;

        public DatabaseManagement()
        {
            conn = new SqlConnection();
            conn.Open();
        }

        ~DatabaseManagement()
        {
            conn.Close();
        }
    }
}
