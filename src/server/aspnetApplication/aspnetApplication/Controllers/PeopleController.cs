using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using aspnetApplication.Models;

namespace aspnetApplication.Controllers
{
    public class PeopleController : ApiController
    {
        private AtosProjektServerEntities2 db = new AtosProjektServerEntities2();

        //Repository
        interface repository
        {
            IEnumerable<Person> GetAll();
            Person Get(int Id);
            Person Add(Hobby hobby);
            void Remove(int id);
            bool Update(Hobby hobby);
        }

        // only for select method
        private static readonly Expression<Func<Person, PersonDto>> AsPersonDto =
            p => new PersonDto
            {
                Id = p.Id,
                PersonName = p.PersonName
            };

        // GET: api/People
        [HttpGet]
        [ResponseType(typeof(HobbyDto))]
        public IQueryable<PersonDto> GetPeople()
        {
            return db.People.Select(p => new PersonDto
            {
                Id = p.Id,
                PersonName = p.PersonName,
                HobbyId = p.HobbyId
            });
        }

        // GET: api/People/5
        [HttpGet]
        [ResponseType(typeof(HobbyPersonDto))]
        public async Task<IHttpActionResult> GetPerson(int id)
        {
            PersonDto person = await db.People.Include(h => h.PersonName)
                .Where(p => p.Id == id)
                .Select(AsPersonDto)
                .FirstOrDefaultAsync();
            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }


        // PUT: api/People/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPerson(Person person)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid model");
            using (var ctx = new AtosProjektServerEntities2())
            {
                var existingPerson = ctx.People.Where(p => p.Id == person.Id)
                    .FirstOrDefault<Person>();

                if (existingPerson != null)
                {
                    existingPerson.Id = person.Id;
                    existingPerson.PersonName = person.PersonName;

                    ctx.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/People
        [HttpPost]
        [ResponseType(typeof(Person))]
        public IHttpActionResult PostPerson(Person person)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new AtosProjektServerEntities2())
            {
                ctx.People.Add(new Person()
                {
                    Id = person.Id,
                    PersonName = person.PersonName
                });

                ctx.SaveChanges();
            }

            return Ok();
        }

        // DELETE: api/People/5
        [HttpDelete]
        [ResponseType(typeof(Person))]
        public IHttpActionResult DeletePerson(int id)
        {
            if (id <= 0)
                return BadRequest("Not valid");
            using (var ctx = new AtosProjektServerEntities2())
            {
                var PersonName = ctx.People
                    .Where(p => p.Id == id)
                    .FirstOrDefault();

                ctx.Entry(PersonName).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonExists(int id)
        {
            return db.People.Count(e => e.Id == id) > 0;
        }
    }
}