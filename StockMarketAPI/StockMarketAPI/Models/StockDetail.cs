using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarketAPI.Models
{
    public class StockDetail
    {
        [Key]
        public  string Ticker { get; set; }
        [Column(TypeName ="nvarchar(50)")]
        public string CompanyName { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string CEOName { get; set; }
        [Column(TypeName ="int")]
        public int Turnover { get; set; }
        [Column(TypeName ="date")]
        public DateTime IPODate { get; set; }
    }
}
