using System;
using System.Collections.Generic;
using System.IO;
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
            if (data == "Hello") throw new InvalidOperationException("Incorrect data.");

            var r = new { data = data+"!", otherValue = data.Length };
            return new JsonResult() { Data = r };
        }

        public ActionResult File()
        {
            return View();
        }

        [HttpPost]
        public ActionResult File_Post(string id, string name)
        {
            string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments), name);

            using (FileStream fs = System.IO.File.Create(path))
            {
                this.Request.InputStream.CopyTo(fs);
                this.Request.InputStream.Position = 0;
            }

            var r = new { id = id, path = path };
            return new JsonResult() { Data = r };
        }
    }
}
