using AutoMapper;
using ContactBook.DBModel;
using ContactBook.Model;
using ContactBook.Model.Models;
using ContactBook.Services.Extensibles;
using System.Collections.Generic;

namespace ContactBook.Services
{
    public class ContactService : IContactService
    {
        private readonly ContactBookConnectionStringDB DB;

        public ContactService()
        {
            this.DB = new ContactBookConnectionStringDB("ContactBookConnectionString");
        }


        public int DeleteContact(int id)
        { 
            return (this.DB.Delete<ContactTable>(id));
        }

        public Contact GetContact(int id)
        {
            var data = this.DB.SingleOrDefault<ContactTable>("WHERE Id = @0", id);
            return data.MapTo<Contact>();
        }

        public List<ContactViewModel> GetAllContacts()
        {
            var data = this.DB.Fetch<ContactView>(string.Empty);
            return data.MapCollectionTo<ContactViewModel>();
        }

        public int AddContact(Contact contactData)
        {
            var cont = contactData.MapTo<ContactTable>();
            return (int)this.DB.Insert(cont);
        }

        public void UpdateContact(int id, Contact contact)
        {
            var cont = contact.MapTo<ContactTable>();
            this.DB.Update(cont, id);
        }
    }
}
