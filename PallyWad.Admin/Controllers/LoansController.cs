﻿using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Approved()
        {
            return View();
        }
        public IActionResult Declined()
        {
            return View();
        }
        public IActionResult Collaterized()
        {
            return View();
        }
        public IActionResult Processed()
        {
            return View();
        }
        public IActionResult LoanApproval()
        {
            return View();
        }

        public IActionResult Payments()
        {
            return View();
        }
        
    }
}
