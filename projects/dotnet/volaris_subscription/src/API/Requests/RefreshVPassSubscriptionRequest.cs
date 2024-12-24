namespace API.Requests
{
    public class RefreshVPassSubscriptionRequest(string email)
    {
        public string Email { get; set; } = email;
    }
}
