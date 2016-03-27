using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApnaMarket.Areas.Administrator.Controllers
{
    public class CategoryController : Controller
    {
        //
        // GET: /Administrator/Category/

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
