namespace backend.Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = default!; 
        public string Password { get; set; } = default!;
        public string Email { get; set; } = default!;
        public bool Active { get; set; } = default!;
        public UserProgress UserProgress { get; set; } = default!;
    }
}
