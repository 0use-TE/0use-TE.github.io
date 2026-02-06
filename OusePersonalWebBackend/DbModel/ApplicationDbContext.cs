using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace OusePersonalWebBackend.DbModel
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<CommitModel> CommitModels { get; set; }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }
    }
}
