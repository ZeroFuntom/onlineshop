using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace aspnetApplication.Models
{
    public class PersonDto
    {
        public int Id { get; set; }
        public string PersonName { get; set; }
        public int HobbyId { get; set; }
    }
}