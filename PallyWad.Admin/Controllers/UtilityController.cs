using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class UtilityController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult LoanRequest()
        {
            return View();
        }
        public IActionResult MemberPositions()
        {
            return View();
        }
    }
}
