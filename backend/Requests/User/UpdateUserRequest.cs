namespace backend.Reques;
{
    public class UpdateUserRequest
    {
        public Guid Id {  get; init; }
        public string UserName { get; init; }
        = default!;
        public string password { get; } = default!;
        public string Email {  get; init; } = default!;
    }
}
