namespace backend.Responses
{
    public class UserResponse
    {
        public Guid Id {  get; set; }
        public string Username { get; init; } = default!;
        public string Email { get; init; } = default!;
    }
}
