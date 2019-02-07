using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KoFirstSet.Controllers
{
    public class JsUrlController : Controller
    {
        //
        // GET: /JsUrl/

        public ActionResult Index()
        {
            return RedirectToAction("JsUrlTest", new { toRemove = true, toUpdate = 2 });
        }

        public ActionResult JsUrlTest()
        {
            return View();
        }

    }
}
