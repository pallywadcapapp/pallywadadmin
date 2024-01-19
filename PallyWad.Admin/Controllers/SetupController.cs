using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class SetupController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Product()
        {
            return View();
        }
        public IActionResult Banks()
        {
            return View();
        }
        public IActionResult LoanType()
        {
            return View();
        }
        public IActionResult LoanInterest()
        {
            return View();
        }

        public IActionResult loancharges()
        {
            return View();
        }
        

        public IActionResult email()
        {
            return View();
        }
        public IActionResult sms()
        {
            return View();
        }

        public IActionResult Collateral()
        {
            return View();
        }
        public IActionResult Document()
        {
            return View();
        }
    }
}
