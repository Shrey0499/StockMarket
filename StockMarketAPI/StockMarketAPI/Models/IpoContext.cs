using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarketAPI.Models
{
    public class IpoContext : DbContext
    {
        public IpoContext(DbContextOptions<IpoContext> options) : base(options)
        {

        }
        public DbSet<Ipo> Ipo { get; set; }
    }
}