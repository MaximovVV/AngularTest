using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplicationDepartment
{
    public partial class DepartmentDBContext : DbContext
    {
        public DepartmentDBContext()
        {
        }

        public DepartmentDBContext(DbContextOptions<DepartmentDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Employe> Employe { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(local)\\sqlexpress;Database=DepartmentDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("IX_Department")
                    .IsUnique();

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employe>(entity =>
            {
                entity.HasIndex(e => e.Mail)
                    .HasName("IX_Employe")
                    .IsUnique();

                entity.Property(e => e.EmployeId).HasColumnName("EmployeID");

                entity.Property(e => e.DateBirth)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.Mail)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name).HasMaxLength(25);

                entity.Property(e => e.Surname).HasMaxLength(35);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Employe)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_Employe_Department");
            });
        }
    }
}
