using System;
using System.Collections.Generic;

namespace WebApplicationDepartment
{
    public partial class Employe
    {
        public int EmployeId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string DateBirth { get; set; }
        public int? Salary { get; set; }
        public int? DepartmentId { get; set; }
        public string Mail { get; set; }

        public virtual Department Department { get; set; }
    }
}
