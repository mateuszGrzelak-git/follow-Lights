namespace backend.Domain;

public class Blog
{
    public Guid Id { get; set; }
    public int Index { get; set; }
    public required string Title { get; set; }
    public required BlogDescription Description { get; set; }
    public Guid UserId { get; set; }
    public Guid? ParentBlogId { get; set; }
    public DateTime Created { get; set; }
    public DateTime Updated { get; set; }
    public int Rating { get; set; }
}