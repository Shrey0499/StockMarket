import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ImportDataComponent } from './import-data/import-data.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { UpdateIpoDetailsComponent } from './update-ipo-details/update-ipo-details.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AddCompanyComponent } from './add-company/add-company.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCompanyFormComponent } from './add-company-form/add-company-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    AdminLandingPageComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIpoDetailsComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    AddCompanyComponent,
    AddCompanyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
