import { Component, OnInit } from '@angular/core';
import { StockDetailService } from '../stock-detail.service';
import { NgForm } from '@angular/forms';
import { StockDetail } from '../stock-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-company-form',
  templateUrl: './add-company-form.component.html',
  styleUrls: ['./add-company-form.component.css']
})
export class AddCompanyFormComponent implements OnInit {

  constructor(public service:StockDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
     this.insertRecord(form);
  }
  insertRecord(form:NgForm){
   this.service.postStockDetail().subscribe(
     res =>{
    this.resetForm(form);
    this.toastr.success('Submitted successfully','Stock Detail Register')
     },
     err=>{console.log(err);}
     );
  }
  updateRecord(form:NgForm){
    this.service.putStockDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully','Stock Detail Register')
      },
      err=> {console.log(err);}
    );
  }
  resetForm(form:NgForm){
 form.form.reset();
 this.service.formData= new StockDetail();
  }

}
