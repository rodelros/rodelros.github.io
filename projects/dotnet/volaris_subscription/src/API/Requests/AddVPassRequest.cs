using Domain.Enums;

namespace API.Requests
{
    public class AddVPassRequest(string email, string vpass)
    {
        public string Email { get; set; } = email;
        public string Vpass { get; set; } = vpass;
    }
}
