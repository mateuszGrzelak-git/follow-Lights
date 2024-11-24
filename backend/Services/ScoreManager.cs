using backend.Domain;
using System.Text.Json;

namespace backend.Services
{
    public class UserProgressService
    {
        private const string FilePath = "./results.json";

        public UserProgress GetUserProgress()
        {
            if (!File.Exists(FilePath))
                return new UserProgress { Results = new List<int>(), Rank = 0 };

            var json = File.ReadAllText(FilePath);
            var resultData = JsonSerializer.Deserialize<Dictionary<string, int>>(json);

            if (resultData != null && resultData.TryGetValue("score", out int score))
            {
                var progress = new UserProgress
                {
                    Results = new List<int> { score },
                    Rank = score
                };
                return progress;
            }

            return new UserProgress { Results = new List<int>(), Rank = 0 };
        }
    }
}
