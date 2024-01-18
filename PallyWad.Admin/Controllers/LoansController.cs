using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class LoansController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Requests()
        {
            return View();
        }
    }
}
