﻿using Microsoft.AspNetCore.Mvc;

namespace PallyWad.Admin.Controllers
{
    public class DocumentController : Controller
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
    }
}
