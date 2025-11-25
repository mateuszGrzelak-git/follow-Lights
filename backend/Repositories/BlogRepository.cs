using backend.Domain;

namespace backend.Repositories;

public class BlogRepository : IBlogRepository
{
    private DatabaseInit _context;

    public BlogRepository(DatabaseInit context)
    {
        _context = context;    
    }
    
    public void AddBlog(Blog blog)
    {
        _context.Blogs.Add(blog);
        _context.SaveChanges();
    }

    public Blog GetBlog(Guid id)
    {
        var foundBlog = _context.Blogs.Find(id);
        if (foundBlog == null)
        {
            throw new Exception("Blog not found");
        }
        
        return foundBlog;
    }

    public void UpdateBlog(Blog blog)
    {
        _context.Blogs.Update(blog);
    }

    public void DeleteBlog(Guid id)
    {
        var blogToRemove = _context.Blogs.Find(id);
        if (blogToRemove != null)
        {
            _context.Blogs.Remove(blogToRemove);
        }
    }

    public List<Blog> GetAllBlogs()
    {
        return _context.Blogs.ToList();
    }
}