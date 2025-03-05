using backend.Domain;
using backend;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace backend.Repositories
{
    public class UserRepository
    {
        private readonly DatabaseInit _context;

        public UserRepository(DatabaseInit context)
        {
            _context = context;
        }

        public void AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void DeleteUser(Guid id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public User GetUser(Guid id)
        {
            var result = _context.Users.Find(id);
            if (result != null)
            {
                return result;
            }
            else
            {
                throw new Exception("User is NULL");
            }
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public bool UpdateUser(User user)
        {
            var existingUser = _context.Users.Find(user.Id);
            if (existingUser != null)
            {
                existingUser.Username = user.Username;
                existingUser.Email = user.Email;

                _context.Users.Update(existingUser);
                _context.SaveChanges();
                return true;
            }

            return false;
        }
    }
}
