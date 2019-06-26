using System.Collections.Generic;
using System.Web.Http;
using ContactBook.DapperServices;

namespace ContactBook1.Controllers
{

    [RoutePrefix("api/contact")]
    public class ContactApiController : ApiController
    { 

        private readonly IContactBookDapperService contactServices;

        public ContactApiController(IContactBookDapperService contactServcie)
        {
            this.contactServices = contactServcie;
        }

        [Route("all")]
        public List<ContactView> Get()
        {
             return this.contactServices.GetAllContacts();
        }

        // GET: api/Data/5
        [Route("{id}")]
        public Contact Get(int id)
        {
            return this.contactServices.GetContact(id);
        }

        // POST: api/Data
        [Route("add")]
        public int Post(Contact contactData)
        {
            return this.contactServices.AddContact(contactData);
        }

        // PUT: api/Data/5
        [Route("update/{id}")]
        public void Put(int id, Contact contact)
        {
            this.contactServices.UpdateContact(id, contact);
        }

        // DELETE: api/Data/5
        [Route("delete/{id}")]
        public int Delete(int id)
        {
            return this.contactServices.DeleteContact(id);
        }
    }
}