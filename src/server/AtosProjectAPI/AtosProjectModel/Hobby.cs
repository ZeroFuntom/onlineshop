//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AtosProjectModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Hobby
    {
        public int Id { get; set; }
        public string NameHobby { get; set; }
    
        public virtual Hobby Hobby1 { get; set; }
        public virtual Hobby Hobby2 { get; set; }
    }
}