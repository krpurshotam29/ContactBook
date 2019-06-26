using DataModel = ContactBook.DBModel;
using ContactBook.Model.Models;

namespace ContactBook.Services.Infrastructure
{
    public class AutoMapperWebProfile : AutoMapper.Profile
    {

        public AutoMapperWebProfile()
        {
            CreateMap<DataModel.ContactTable, Contact>().ReverseMap();

            CreateMap<DataModel.ContactView, ContactViewModel>();
        }

        public static void Run()
        {
#pragma warning disable CS0618 // Type or member is obsolete
            AutoMapper.Mapper.Initialize(a => {
                a.AddProfile<AutoMapperWebProfile>();
            });
#pragma warning restore CS0618 // Type or member is obsolete
        }

       
    }
}