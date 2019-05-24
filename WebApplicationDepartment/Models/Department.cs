using System;
using System.Collections.Generic;

namespace WebApplicationDepartment
{
    public partial class Department
    {
        public Department()
        {
            Employe = new HashSet<Employe>();
        }

        public int DepartmentId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Employe> Employe { get; set; }
    }
}
