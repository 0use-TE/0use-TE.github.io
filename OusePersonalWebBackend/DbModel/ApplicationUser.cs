using Microsoft.AspNetCore.Identity;

namespace OusePersonalWebBackend.DbModel
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<CommitModel> Commits { get; set; } = new List<CommitModel>();
    }
}
