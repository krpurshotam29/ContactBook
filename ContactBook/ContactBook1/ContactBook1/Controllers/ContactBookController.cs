using System.Web.Mvc;

namespace ContactBook1.Controllers
{
    public class ContactBookController : Controller
    {
        

        // GET: ContactBook
        public ActionResult Index()
        {
            return View();
        }

        public string Get()
        {
            return ("");
        }
    }
}