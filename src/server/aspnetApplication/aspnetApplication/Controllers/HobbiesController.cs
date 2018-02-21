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
    public class HobbiesController : ApiController
    {
        private AtosProjektServerEntities2 db = new AtosProjektServerEntities2();

        // GET: api/Hobbies
        [HttpGet]
        [ResponseType(typeof(PersonDto))]
        public IQueryable<HobbyDto> GetHobbies()
        {
            return db.Hobbies.Select(p => new HobbyDto
            {
                Id = p.Id,
                HobbyName = p.HobbyName
            });
        }

        // GET: api/Hobbies/5
        [HttpGet]
        [ResponseType(typeof(Hobby))]
        public async Task<IHttpActionResult> GetHobbies(int id)
        {
            Hobby hobby = await db.Hobbies.FindAsync(id);
            if (hobby == null)
            {
                return NotFound();
            }

            return Ok(hobby);
        }

        // PUT: api/Hobbies/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutHobby(int id, Hobby hobby)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hobby.Id)
            {
                return BadRequest();
            }

            db.Entry(hobby).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HobbyExists(id))
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

        // POST: api/Hobbies
        [HttpPost]
        [ResponseType(typeof(Hobby))]
        public async Task<IHttpActionResult> PostHobby(Hobby hobby)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Hobbies.Add(hobby);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = hobby.Id }, hobby);
        }

        // DELETE: api/Hobbies/5
        [HttpDelete]
        [ResponseType(typeof(Hobby))]
        public async Task<IHttpActionResult> DeleteHobby(int id)
        {
            Hobby hobby = await db.Hobbies.FindAsync(id);
            if (hobby == null)
            {
                return NotFound();
            }

            db.Hobbies.Remove(hobby);
            await db.SaveChangesAsync();

            return Ok(hobby);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HobbyExists(int id)
        {
            return db.Hobbies.Count(e => e.Id == id) > 0;
        }
    }
}