import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLandingPageComponent} from './admin-landing-page/admin-landing-page.component';
import {ImportDataComponent} from './import-data/import-data.component';
import { LoginComponent } from './login/login.component';
import {AddCompanyComponent} from './add-company/add-company.component';
const routes: Routes = [
  {path:'admin',component:AdminLandingPageComponent},
  {path:'import-data', component:ImportDataComponent},
  {path: '',component: LoginComponent},
  {path:'add-company', component: AddCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
