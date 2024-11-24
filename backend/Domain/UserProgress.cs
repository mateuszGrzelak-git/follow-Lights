using System.ComponentModel.DataAnnotations;

namespace backend.Domain
{
    public class UserProgress
    {
        public string id { get; set; } = default!;
        public List<int> Results { get; set; } = default!;
        public int Rank { get; set; }
        public DateTime UpdateTime { get; set; }

    }
}
