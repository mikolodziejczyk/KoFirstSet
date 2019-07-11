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

        public ActionResult RetrievingHtml()
        {
            return View();
        }

        [HttpPost]
        public ActionResult RetrievingHtml_Post(string data)
        {
            if (data == "Hello") throw new InvalidOperationException("Incorrect data.");

            System.Threading.Thread.Sleep(3000);

            ViewBag.data = data;

            return View();
        }

        public ActionResult FileWithAbort()
        {
            return View();
        }

        [HttpPost]
        public ActionResult FileWithAbort_Post(string id, string name)
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

        public ActionResult FormData()
        {
            return View();
        }

        [HttpPost]
        public ActionResult FormData_Post(string name)
        {
            List<string> files = new List<string>();

            for(int i = 0; i< this.Request.Files.Count; i++ ) {
                HttpPostedFileBase file = this.Request.Files[i];

                string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments), file.FileName);

                using (FileStream fs = System.IO.File.Create(path))
                {
                    file.InputStream.CopyTo(fs);
                }

                files.Add(path);
            }



            var r = new { file = files.ToArray(), name = name };
            return new JsonResult() { Data = r };
        }
    }
}
