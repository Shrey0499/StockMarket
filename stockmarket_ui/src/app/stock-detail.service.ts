import { Injectable } from '@angular/core';
import { StockDetail } from './stock-detail.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockDetailService {

  constructor(private http:HttpClient) { }
  readonly baseURL ='https://localhost:44346/api/StockDetails'
  formData:StockDetail =new StockDetail();
  list:StockDetail[];
  postStockDetail()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  putStockDetail(){
    return this.http.put('${this.baseURL}/${this.formData.Ticker}',this.formData);
  }
  deleteStockDetail(id:string){
    return this.http.delete('${this.baseURL}/${id}');
  }
refreshList(){
  this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list=res as StockDetail[]);
}

}
