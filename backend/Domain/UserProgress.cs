using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.Domain
{
    public class UserProgress
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public List<int> Results { get; set; } = new List<int>();
        public int Rank { get; set; }
        public DateTime UpdateTime { get; set; }
        public Guid UserId { get; set; }
    }
}