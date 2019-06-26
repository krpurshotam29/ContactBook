using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactBook.DapperServices
{
    public interface IContactBookDapperService
    {
        List<ContactView> GetAllContacts();

        Contact GetContact(int id);

        int AddContact(Contact contactData);

        void UpdateContact(int id, Contact contact);

        int DeleteContact(int id);
    }
}
