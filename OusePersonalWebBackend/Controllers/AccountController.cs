using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using OusePersonalWebBackend.DbModel;

namespace OusePersonalWebBackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> Login([FromQuery] string? returnUrl)
        {
            AuthenticationProperties authenticationProperties = new AuthenticationProperties
            {
                RedirectUri = returnUrl
            };

            return Challenge(authenticationProperties);
        }
        [HttpGet]
        public async Task<IActionResult> GithubCallBack()
        {
            var loginInfo = await _signInManager.GetExternalLoginInfoAsync();
            //开始认证

            return Ok();
        }
    }
}
