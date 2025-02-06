using backend.Mailing;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/Email")]
public class HomeController : Controller
{
    private readonly EmailSender emailSender;

    public HomeController(EmailSender emailSender)
    {
        this.emailSender = emailSender;
    }

    [HttpPost]
    public async Task<IActionResult> Index(string email, string subject, string message)
    {
        await emailSender.SendEmailAsync(email, subject, message);
        return View();
    }
}