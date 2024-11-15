namespace backend.Responses
{
    public class UserResponse
    {
        public Guid Id {  get; set; }
        public string UserName { get; init; } = default!;
        public string Email { get; init; } = default!;
        public string Password { get; } = default!;
    }
}
