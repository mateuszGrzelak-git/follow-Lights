using backend.Domain;

namespace backend.Repositories;

public interface IBlogRepository
{
    public void AddBlog(Blog blog);
    public Blog GetBlog(Guid id);
    public void UpdateBlog(Blog blog);
    public void DeleteBlog(Guid id);
    public List<Blog> GetAllBlogs();
}