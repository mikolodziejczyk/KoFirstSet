using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KoFirstSet.Controllers
{
    public class XmlHttpRequestController : Controller
    {
        //
        // GET: /XmlHttpRequest/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Fundamentals()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Fundamentals_Post(string data)
        {
            var r = new { data = data+"!", otherValue = data.Length };
            return new JsonResult() { Data = r, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}
