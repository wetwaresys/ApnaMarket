using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntity;

namespace ApnaMarket.Models
{
    public class HomePageModel
    {
        public IList<am_product> HomeProducts { get; set; }

        public IList<am_banner> Banners { get; set; }


    }
}