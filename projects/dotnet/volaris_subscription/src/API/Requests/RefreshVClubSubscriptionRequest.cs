namespace API.Requests
{
    public class RefreshVClubSubscriptionRequest(string email)
    {
        public string Email { get; set; } = email;
    }
}
