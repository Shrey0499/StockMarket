using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StockMarketAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StockDetails",
                columns: table => new
                {
                    Ticker = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    CEOName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Turnover = table.Column<int>(type: "int", nullable: false),
                    IPODate = table.Column<DateTime>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StockDetails", x => x.Ticker);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StockDetails");
        }
    }
}
