using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class AccountingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GL()
        {
            return View();
        }
        public IActionResult Chart()
        {
            return View();
        }
    }
}
