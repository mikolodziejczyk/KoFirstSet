using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KoFirstSet.Controllers
{
    public class JsTreeController : Controller
    {
        //
        // GET: /JsTree/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult JsData()
        {

            SampleTree st = new SampleTree();

            return View();
        }

    }

    public class TreeNode
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public int? ParentId { get; set; }
    }

    public class SampleTree
    {
        public SampleTree()
        {
            Tree = new List<TreeNode>();

            for (int i = 0; i < 3000; i++)
            {
                var tn = GetNode(i);
                if (i < 50) tn.ParentId = null;
                Tree.Add(tn);
            }
        }

        static Random random = new Random();

        public List<TreeNode> Tree { get; private set; }

        public static TreeNode GetNode(int id)
        {
            TreeNode tn = new TreeNode()
            {
                Id = id,
                Name = String.Format("Node {0} - {1}", id, Guid.NewGuid()),
                Order = 10000 - id,
                ParentId = (int)((random.NextDouble() * id) - 1)
            };

            return tn;
        }
    }
}
