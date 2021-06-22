using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StockMarketAPI.Models;

namespace StockMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockDetailsController : ControllerBase
    {
        private readonly StockDetailContext _context;

        public StockDetailsController(StockDetailContext context)
        {
            _context = context;
        }

        // GET: api/StockDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StockDetail>>> GetStockDetails()
        {
            return await _context.StockDetails.ToListAsync();
        }

        // GET: api/StockDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StockDetail>> GetStockDetail(string id)
        {
            var stockDetail = await _context.StockDetails.FindAsync(id);

            if (stockDetail == null)
            {
                return NotFound();
            }

            return stockDetail;
        }

        // PUT: api/StockDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStockDetail(string id, StockDetail stockDetail)
        {
            if (id != stockDetail.Ticker)
            {
                return BadRequest();
            }

            _context.Entry(stockDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StockDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StockDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StockDetail>> PostStockDetail(StockDetail stockDetail)
        {
            _context.StockDetails.Add(stockDetail);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StockDetailExists(stockDetail.Ticker))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStockDetail", new { id = stockDetail.Ticker }, stockDetail);
        }

        // DELETE: api/StockDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStockDetail(string id)
        {
            var stockDetail = await _context.StockDetails.FindAsync(id);
            if (stockDetail == null)
            {
                return NotFound();
            }

            _context.StockDetails.Remove(stockDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StockDetailExists(string id)
        {
            return _context.StockDetails.Any(e => e.Ticker == id);
        }
    }
}
