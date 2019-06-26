using AutoMapper;
using ContactBook.DBModel;
using System.Collections.Generic;

namespace ContactBook.Services.Extensibles
{
    public static class Extensible
    {
        public static T MapTo<T>(this object obj)
        {
            return Mapper.Map<T>(obj);
        }

        public static List<T> MapCollectionTo<T>(this List<ContactView> contactView)
        {
            return Mapper.Map<List<T>>(contactView);
        }
    }
}
