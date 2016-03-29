using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApnaMarket.Areas.Administrator.Controllers
{
    public class BannersController : Controller
    {
        //
        // GET: /Administrator/Banners/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(string model)
        {
            return View();
        }

    }
}
