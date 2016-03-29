using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessEntity;
using DAL;
using ApnaMarket.Models;

namespace ApnaMarket.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            IRepository<am_product> dal = new ProductDAL();
            IRepository<am_banner> bannerDal = new BannerDAL();

            HomePageModel model = new HomePageModel();
            model.Banners = bannerDal.SelectList();
            bannerDal = null;

            model.HomeProducts = dal.SelectList();
            dal = null;
            return View(model);
        }

    }
}
