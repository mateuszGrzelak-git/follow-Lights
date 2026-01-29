using backend.Domain;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController : ControllerBase
{
    private IBlogRepository _blogRepository;
    
    public BlogController(IBlogRepository blogRepository)
    {
        _blogRepository = blogRepository;
    }
    
    [HttpPost]
    public IActionResult CreateBlog([FromBody] Blog blog)
    {
        _blogRepository.AddBlog(blog);    
        return CreatedAtAction(nameof(GetBlog), new { id = blog.Id }, blog);
    }

    [HttpGet("{id:guid}")]
    public IActionResult GetBlog(Guid id)
    {
        Blog blog = _blogRepository.GetBlog(id);
        if (blog == null)
            return NotFound();
        return Ok(blog);
    }

    [HttpGet]
    public ActionResult<IEnumerable<Blog>> GetBlogs()
    {
        var blogs = _blogRepository.GetAllBlogs();
        return Ok(blogs);
    }

    [HttpPut("{id:guid}")]
    public IActionResult UpdateBlog([FromBody] Blog blog)
    {
        _blogRepository.UpdateBlog(blog);
        return NoContent();
    }
}