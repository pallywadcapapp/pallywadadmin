using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class DocumentsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Collateral()
        {
            return View();
        }
        public IActionResult CollateralDetails()
        {
            return View();
        }
        public IActionResult DocumentDetails()
        {
            return View();
        }
        public IActionResult CollateralStatus()
        {
            return View();
        }
        public IActionResult DocumentStatus()
        {
            return View();
        }
        public IActionResult CollateralPreview()
        {
            return View();
        }
    }
}
