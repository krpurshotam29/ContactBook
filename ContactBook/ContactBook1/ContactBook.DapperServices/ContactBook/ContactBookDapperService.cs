using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Data;

namespace ContactBook.DapperServices
{
    public class ContactBookDapperService : IContactBookDapperService
    {
        private string connectionString;
        private SqlConnection connection; 

        public ContactBookDapperService()
        {
            this.connectionString = "Server=PURUSHOTAMINT-P;Database=ContactBook;Trusted_Connection=True;";
            this.connection = new SqlConnection(this.connectionString);

        }
        public int AddContact(Contact contactData)
        {
            return this.connection.Execute("AddContact", param: new
            {
                Name = contactData.Name,
                Email = contactData.Email,
                Mobile = contactData.Mobile,
                Phone = contactData.Phone,
                Website = contactData.Website,
                Address = contactData.Address
            }, commandType: CommandType.StoredProcedure);
        }

        public int DeleteContact(int id)
        {
            return this.connection.Execute("DeleteContact", param: new { Id = id }, commandType: CommandType.StoredProcedure);
        }

        public List<ContactView> GetAllContacts()
        {
            return this.connection.Query<ContactView>("GetContactView").ToList<ContactView>();
        }

        public Contact GetContact(int id)
        {
            return this.connection.QuerySingle<Contact>("GetContactById", param: new { Id = id }, commandType: CommandType.StoredProcedure);
        }

        public void UpdateContact(int id, Contact contactData)
        {
            this.connection.Execute("UpdateContact", param: new
            {
                Id = contactData.Id,
                Name = contactData.Name,
                Email = contactData.Email,
                Mobile = contactData.Mobile,
                Phone = contactData.Phone,
                Website = contactData.Website,
                Address = contactData.Address
            }, commandType: CommandType.StoredProcedure);
        }
    }
}
