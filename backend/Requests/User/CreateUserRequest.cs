namespace backend.Requests;
    public class CreateUserRequest
    {
        public string Username { get; init; } = default!;
        public string Email { get; init; } = default!;
        public string Password { get; init; } = default!;
    }
