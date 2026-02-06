using System.ComponentModel.DataAnnotations;

namespace OusePersonalWebBackend.DbModel
{
    public class CommitModel
    {
        [Key]
        public int Key { get; set; }
        public string BlogPath { get; set; } = "";
        public ApplicationUser? ApplicationUser { get; set; }
        public string? ApplicationUserId { get; set; }
    }
}
