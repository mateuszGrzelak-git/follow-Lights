namespace backend.Responses
{
    public class GetAllUsersResponse
    {
        public IEnumerable<UserResponse> Customers { get; init; } = Enumerable.Empty<UserResponse>
    }
}
