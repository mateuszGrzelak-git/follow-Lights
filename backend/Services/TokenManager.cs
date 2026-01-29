//https://bulldogjob.pl/readme/bezpieczna-implementacja-json-web-tokens-jwt-w-c

using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;
using backend.Domain;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;


namespace backend.Services;

public class TokenManager
{
    private static string _secret = string.Empty;

    private static string generateRandomString(int length)
    {
        Random res = new Random();
        String str = "abcdefghijklmnopqrstuvwxyz";
        String ran = "";

        for (int i = 0; i < length; i++)
        {
            int x = res.Next(26);
            ran = ran + str[x];
        }

        return ran;
    }

    public TokenManager(string secret)
    {
        _secret = secret;
    }
    
    public static string GenerateAccessToken()
    {
        return new JwtBuilder()
            .WithAlgorithm(new HMACSHA256Algorithm())
            .WithSecret(Encoding.ASCII.GetBytes(_secret))
            .AddClaim("exp", DateTimeOffset.UtcNow.AddMinutes(10).ToUnixTimeSeconds())
            .Encode();
    }
    
    public static IDictionary<string, object> VerifyToken(string token)
    {
        return new JwtBuilder()
            .WithSecret(_secret)
            .MustVerifySignature()
            .Decode<IDictionary<string, object>>(token);
    }
    
    public void ConfigureServices(IServiceCollection services)
    {
        // Removed for clarity

        JwtBearerOptions options(JwtBearerOptions jwtBearerOptions, string audience) {
            jwtBearerOptions.RequireHttpsMetadata = false;
            jwtBearerOptions.SaveToken = true;
            jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_secret)),
                ValidateAudience = true,
                ValidAudience = audience,
                ValidateLifetime = true, //validate the expiration and not before values in the token
                ClockSkew = TimeSpan.FromMinutes(1) //1 minute tolerance for the expiration date
            };
            if (audience == "access")
            {
                jwtBearerOptions.Events = new JwtBearerEvents
                {
                    OnAuthenticationFailed = context =>
                    {
                        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
                        {
                            context.Response.Headers["Token-Expired"] = "true";
                        }
                        return Task.CompletedTask;
                    }
                };
            }
            return jwtBearerOptions;
        }

        services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(jwtBearerOptions => options(jwtBearerOptions, "access"))
            .AddJwtBearer("refresh", jwtBearerOptions => options(jwtBearerOptions, "refresh"));
    
        // Removed for clarity
    }
    
    public static (string key, string jwt) GenerateRefreshToken(User user)
    {
        var randomNumber = new byte[32];
        using (var rng = RandomNumberGenerator.Create()){
            rng.GetBytes(randomNumber);
            Convert.ToBase64String(randomNumber);
        }

        var key = System.Text.Encoding.ASCII.GetString(randomNumber);

        string jwt = new JwtBuilder()
            .WithAlgorithm(new HMACSHA256Algorithm())
            .WithSecret(_secret)
            .AddClaim("exp", DateTimeOffset.UtcNow.AddHours(4).ToUnixTimeSeconds())
            .AddClaim("refresh", generateRandomString(10))
            .AddClaim("username", user.Username)
            .Encode();

        return (key, jwt);
    }
}