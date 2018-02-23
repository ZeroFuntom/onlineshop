using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using aspnetApplication.Models;

namespace aspnetApplication.Controllers
{
    public class PeopleController : ApiController
    {
        private AtosProjektServerEntities2 db = new AtosProjektServerEntities2();

        // GET: api/People
        [HttpGet]
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
        public IHttpActionResult GetPerson(int Id)
        {
            HobbyPersonDto person = db.People.Include(p => p.Hobby)
                .Where(p => p.Id == Id)
                .Select(p => new HobbyPersonDto
                {
                    PersonId = p.Id,
                    PersonName = p.PersonName,
                    HobbyId = p.HobbyId,
                    HobbyName = p.Hobby.HobbyName
                })
                .SingleOrDefault();
                
            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }


        // PUT: api/People/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPerson(int id, Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.Id)
            {
                return BadRequest();
            }

            db.Entry(person).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/People
        [HttpPost]
        [ResponseType(typeof(Person))]
        public async Task<IHttpActionResult> PostPerson(Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.People.Add(person);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = person.Id }, person);
        }

        // DELETE: api/People/5
        [HttpDelete]
        [ResponseType(typeof(Person))]
        public async Task<IHttpActionResult> DeletePerson(int id)
        {
            Person person = await db.People.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            db.People.Remove(person);
            await db.SaveChangesAsync();

            return Ok(person);
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