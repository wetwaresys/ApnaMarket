using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessEntity;
using BusinessEntity.Bussiness_Logic;

namespace ApnaMarket.Controllers
{
    public class ProductController : Controller
    {
        //
        // GET: /Product/
        IDiscountServices _discountService;
        public ProductController()
        {
            _discountService = new DiscountServices();
        }

        public ActionResult Index()
        {
            return View();
        }

        [ChildActionOnly]
        public ActionResult _productBox(am_product prd)
        {

            return PartialView(prd);
        }

    }
}
