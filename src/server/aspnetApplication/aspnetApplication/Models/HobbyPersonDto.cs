using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace aspnetApplication.Models
{
    public class HobbyPersonDto
    {
        public int PersonId { get; set; }
        public string PersonName { get; set; }
        public int HobbyId { get; set; }
        public string HobbyName { get; set; }
    }
}