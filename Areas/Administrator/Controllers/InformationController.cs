using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApnaMarket.Areas.Administrator.Controllers
{
    public class InformationController : Controller
    {
        //
        // GET: /Administrator/Information/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Add()
        {
            return View();
        }
    }
}
