using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApnaMarket.Controllers
{
    public class ShoppingCartController : Controller
    {
        //
        // GET: /ShoppingCart/

        public ActionResult Index()
        {
            return View();
        }

        [ChildActionOnly]
        public ActionResult CartOnFly()
        {
            return PartialView("_cartOnFly");
        }
    }
}
