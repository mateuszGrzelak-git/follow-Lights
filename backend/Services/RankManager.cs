using System.Collections;
using System.Collections.Specialized;

namespace backend.Services
{
    public class RankManager : IRankManager
    {
        private int rankCount;
        private OrderedDictionary rankDistribution;
        private List<int> requiredPoints;
        public RankManager()
        {
            rankCount = 0;
            rankDistribution = new OrderedDictionary();
            requiredPoints = new List<int>();
        }
        public int GetRank(string name)
        {
            int index = 0;
            foreach (string result in rankDistribution.Values)
            {
                if (result == name)
                {
                    return index; 
                }
                index++;
            }
            return 0;
        }

        public string GetRank(int rankStatus)
        {
            var result = rankDistribution[rankStatus];
            if (result != null)
            {
                return (string)result;
            }
            return String.Empty;
        }

        public void AddRank(string rank)
        {
            rankDistribution.Add(rankCount, rank);
            rankCount++;
        }

        public void SetRank(int score)
        {
            requiredPoints.Add(score);
        }
    }
}
