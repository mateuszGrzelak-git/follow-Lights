namespace backend.Services
{
    public interface IRankManager
    {
        public int GetRank(string name);
        public void SetRank(int score);
    }
}
