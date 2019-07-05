using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;
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
            if (name.StartsWith("K")) throw new InvalidOperationException("Incorrect data.");

            string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments), name);

            using (FileStream fs = System.IO.File.Create(path))
            {
                this.Request.InputStream.Position = 0;
                this.Request.InputStream.CopyTo(fs);
            }

            var r = new { id = id, path = path };
            return new JsonResult() { Data = r };
        }

        public ActionResult RetrievingFile()
        {
            return View();
        }

        [HttpPost]
        public ActionResult RetrievingFile_Post(int id)
        {
            string[] registeredNames = new string[] { "MyWork.jpg", "Tasks.jpg", "connections.svg" };
            string fileName = registeredNames[id % registeredNames.Length];

            string filePath = HostingEnvironment.MapPath(@"~\Content\Images\" + fileName);

            return File(filePath, "application/octet-stream");
        }
    }
}
