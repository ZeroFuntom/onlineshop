using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AtosProjectAPI.Controllers
{
    public class ValuesController : ApiController
    {
        //[HttpGet]
        //public IEnumerable<string> Persons()
        //{
        //    using (var context = new AtosProjektServerEntities())
        //    {
        //        return context.Persons.Select(e => e.Name).ToList();
        //    }
        //}

        //[HttpGet]
        //public PersonDto Person(int id)
        //{
        //    using (var context = new AtosProjektServerEntities())
        //    {
        //        Person person = context.Persons.Include(e => e.Hobby).Single(e => e.Id == id);

        //        return new PersonDto
        //        {
        //            Name = person.Name,
        //            HobbyName = person.Hobby.Name
        //        };
        //    }
        //}

        //[HttpPost]
        //public void CreatePerson([FromBody] PersonDto value)
        //{
        //    using (var context = new AtosProjektServerEntities())
        //    {
        //        var newHobby = new Hobby
        //        {
        //            Name = value.HobbyName
        //        };
        //        context.Companies.Add(newHobby);

        //        var newPerson = new Person
        //        {
        //            Name = value.Name,
        //            Hobby = newHobby
        //        };
        //        context.Persons.Add(newPerson);
        //        context.SaveChanges();
        //    }
        //}

        //[HttpPut]
        //public void Update(int id, [FromBody]PersonDto value)
        //{
        //}

        //[HttpDelete]
        //public void Delete(int id)
        //{
        //}
    }
}
