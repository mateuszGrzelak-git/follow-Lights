namespace backend.Requests.User;
    public class CreateUserRequest
    {
        public string Username { get; init; } = default!;
        public string Email { get; init; } = default!;
        public string Password { get; init; } = default!;
    }
