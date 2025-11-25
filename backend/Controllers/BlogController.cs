using backend.Domain;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController
{
    private IBlogRepository _blogRepository;
    
    public BlogController(IBlogRepository blogRepository)
    {
        _blogRepository = blogRepository;
    }
    
    [HttpPost]
    public void CreateBlog([FromBody] Blog blog)
    {
        _blogRepository.AddBlog(blog);    
    }

    [HttpGet]
    public void GetBlog(Guid id)
    {
        _blogRepository.GetBlog(id);
    }

    [HttpGet]
    public void GetBlogs()
    {
        _blogRepository.GetAllBlogs();
    }

    [HttpPost]
    public void UpdateBlog([FromBody] Blog blog)
    {
        _blogRepository.UpdateBlog(blog);
    }
}