using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace aspnetApplication.Models
{
    interface IHobbyRepository
    {
        IEnumerable<Hobby> GetAll();
        Hobby Get(int Id);
        Hobby Add(Hobby hobby);
        void Remove(int id);
        bool Update(Hobby hobby);
    }
}
