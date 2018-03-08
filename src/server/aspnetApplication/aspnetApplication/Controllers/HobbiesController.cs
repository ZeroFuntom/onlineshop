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
    public class HobbiesController : ApiController
    {
        private AtosProjektServerEntities2 db = new AtosProjektServerEntities2();

        // Repository
        interface repository
        {
            IEnumerable<Hobby> GetAll();
            Hobby Get(int Id);
            Hobby Add(Hobby hobby);
            void Remove(int id);
            bool Update(Hobby hobby);
        }

        // only for select method
        private static readonly Expression<Func<Hobby, HobbyDto>> AsHobbyDto =
            h => new HobbyDto
            {
                Id = h.Id,
                HobbyName = h.HobbyName
            };

        // GET: api/Hobbies /
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

        // GET: api/Hobbies/5 /
        [HttpGet]
        [ResponseType(typeof(HobbyDto))]
        public async Task<IHttpActionResult> GetHobby(int id)
        {
            HobbyDto hobby = await db.Hobbies.Include(h => h.HobbyName)
                .Where(h => h.Id == id)
                .Select(AsHobbyDto)
                .FirstOrDefaultAsync();
            if (hobby == null)
            {
                return NotFound();
            }

            return Ok(hobby);
        }

        // PUT: api/Hobbies/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHobby (Hobby hobby)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid model");
            using (var ctx = new AtosProjektServerEntities2())
            {
                var existingHobby = ctx.Hobbies.Where(h => h.Id == hobby.Id)
                    .FirstOrDefault<Hobby>();

                if (existingHobby != null)
                {
                    existingHobby.Id = hobby.Id;
                    existingHobby.HobbyName = hobby.HobbyName;

                    ctx.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/Hobbies
        [HttpPost]
        [ResponseType(typeof(Hobby))]
        public IHttpActionResult PostHobby(Hobby hobby)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            using (var ctx = new AtosProjektServerEntities2())
            {
                ctx.Hobbies.Add(new Hobby()
                {
                    Id = hobby.Id,
                    HobbyName = hobby.HobbyName
                });

                ctx.SaveChanges();
            }

            return Ok();
        }

        // DELETE: api/Hobbies/5
        [HttpDelete]
        [ResponseType(typeof(Hobby))]
        public IHttpActionResult DeleteHobby(int id)
        {
            if (id <= 0)
                return BadRequest("Not valid");
            using (var ctx = new AtosProjektServerEntities2())
            {
                var HobbyName = ctx.Hobbies
                    .Where(h => h.Id == id)
                    .FirstOrDefault();

                ctx.Entry(HobbyName).State = System.Data.Entity.EntityState.Deleted;
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

        private bool HobbyExists(int id)
        {
            return db.Hobbies.Count(e => e.Id == id) > 0;
        }
    }
}