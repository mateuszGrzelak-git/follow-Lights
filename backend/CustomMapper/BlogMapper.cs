using backend.Domain;

namespace backend.Mapper;

public class BlogMapper
{
    public BlogDescription ToDomain(BlogDescriptionDto dto)
    {
        if (dto == null || string.IsNullOrWhiteSpace(dto.content))
        {
            return new BlogDescription()
            {
                Images = new Dictionary<int, string>(),
                Description = ""
            };
        }
        
        var parts = dto.content.Split('!');

        var description = parts[0].Trim();
        
        var images = new Dictionary<int, string>();

        for (int i = 1; i < parts.Length; i += 2)
        {
            var url = parts[i].Trim();
            if (!string.IsNullOrWhiteSpace(url))
            {
                images.Add(i / 2, url);
            }
        }

        return new BlogDescription()
        {
            Description = description,
            Images = images
        };
    }

    public BlogDescriptionDto ToDto(BlogDescription domain)
    {
        if (domain == null) throw new Exception("BlogDescriptionDto is null");

        var builder = new List<string> { domain.Description };

        if (domain.Images != null)
            foreach (var kv in domain.Images)
            {
                builder.Add($"!{kv.Value}");
            }

        return new BlogDescriptionDto
        {
            content = string.Join(" ", builder)
        };
    }
}