using ContactBook.Model.Models;
using System.Collections.Generic;

namespace ContactBook.Services
{
    public interface IContactService
    {
        List<ContactViewModel> GetAllContacts();

        Contact GetContact(int id);

        int AddContact(Contact contactData);

        void UpdateContact(int id, Contact contact);

        int DeleteContact(int id);
    }
}
