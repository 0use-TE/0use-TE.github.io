using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace OusePersonalWebBackend.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
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
            return Ok();
        }
    }
}
