using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using backend.Domain;
using backend.Repositories;

namespace backend;
public class MatchmakingService
{
    private static List<User> MatchmakingQueue = new();
    private readonly UserRepository _userRepository;

    public MatchmakingService(UserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public backend.Domain.Match? FindMatch(Guid userId)
    {
        // Pobranie użytkownika (bez asynchroniczności)
        var user = _userRepository.GetUser(userId);
        if (user == null) return null;

        // Dodanie użytkownika do kolejki matchmakingu
        lock (MatchmakingQueue) // Zabezpieczenie przed równoczesnym dostępem
        {
            MatchmakingQueue.Add(user);
        }

        // Szukamy przeciwnika w kolejce
        var opponent = MatchmakingQueue
            .Where(u => u.Id != user.Id && Math.Abs(u.UserProgress.Rank - user.UserProgress.Rank) <= 100)
            .OrderBy(u => Guid.NewGuid()) // Losowe sortowanie
            .FirstOrDefault();

        if (opponent != null)
        {
            // Usuwamy użytkowników z kolejki
            lock (MatchmakingQueue) // Zabezpieczenie przed równoczesnym dostępem
            {
                MatchmakingQueue.Remove(user);
                MatchmakingQueue.Remove(opponent);
            }

            // Zwracamy dopasowanie
            return new backend.Domain.Match { Player1 = user, Player2 = opponent };
        }

        // Brak dopasowanego przeciwnika
        return null;
    }


}
