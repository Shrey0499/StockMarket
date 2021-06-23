import { Component, OnInit } from '@angular/core';
import { StockDetailService } from '../stock-detail.service';
import {StockDetail} from '../stock-detail.model'
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {JsonPipe} from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(public service:StockDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:StockDetail){
    this.service.formData=Object.assign({},selectedRecord);
  }
  onDelete(id:string){
    if (confirm('Are you sure to delete this record')){
      this.service.deleteStockDetail(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted successfully",'Stock Detail Register')
        },
        err=>{console.log(err)}
      )
    }
  }
 
}
