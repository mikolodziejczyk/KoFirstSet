using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KoFirstSet.Controllers
{
    public class IFrameController : Controller
    {
        //
        // GET: /IFrame/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DialogHost()
        {
            return View();
        }



        public ActionResult Content()
        {
            SampleTree st = new SampleTree();
            var tree = st.Tree;

            var js = tree.Select(x => new { id = x.Id.ToString(), text = x.Name, parent = x.ParentId.HasValue ? x.ParentId.Value.ToString() : "#", position = x.Order }); // ToArray() is not neccessary
            string r = JsonConvert.SerializeObject(js);

            return View((object)r);
        }

    }
}
