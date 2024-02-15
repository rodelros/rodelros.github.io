namespace API.Requests
{
    public class NextBillingDateRequest(string email, string subscription)
    {
        public string Email { get; set; } = email;
        public string Subscription { get; set; } = subscription;
    }
}
