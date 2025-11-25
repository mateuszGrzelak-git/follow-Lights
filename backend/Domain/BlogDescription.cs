namespace backend.Domain;

public class BlogDescription
{
    public Dictionary<int, string>? Images { get; set; }
    public required string Description { get; set; }
}