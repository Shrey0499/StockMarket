// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StockMarketAPI.Models;

namespace StockMarketAPI.Migrations
{
    [DbContext(typeof(StockDetailContext))]
    partial class StockDetailContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("StockMarketAPI.Models.StockDetail", b =>
                {
                    b.Property<string>("Ticker")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CEOName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CompanyName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("IPODate")
                        .HasColumnType("date");

                    b.Property<int>("Turnover")
                        .HasColumnType("int");

                    b.HasKey("Ticker");

                    b.ToTable("StockDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
