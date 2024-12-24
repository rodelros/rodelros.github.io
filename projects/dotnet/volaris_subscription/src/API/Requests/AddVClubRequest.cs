using Domain.Enums;

namespace API.Requests
{
    public class AddVClubRequest(string email, string vclub)
    {
        public string Email { get; set; } = email;
        public string Vclub { get; set; } = vclub;
    }
}
