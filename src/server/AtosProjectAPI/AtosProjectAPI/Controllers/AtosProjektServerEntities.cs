using System;
using System.Collections.Generic;

namespace AtosProjectAPI.Controllers
{
    internal class AtosProjektServerEntities : IDisposable
    {
        public IEnumerable<object> Persons { get; internal set; }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}