using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain;

public class BlogDescription
{
    public Guid Id { get; set; }
    [NotMapped]
    public Dictionary<int, string>? Images { get; set; }
    public required string Description { get; set; }
}