import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddTestInCentreComponent } from './add-test-in-centre/add-test-in-centre.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreateDiagnosticcentreComponent } from './create-diagnosticcentre/create-diagnosticcentre.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { MyAppointment } from './myappointment/myappointment';
import { MyappointmentComponent } from './myappointment/myappointment.component';
import { MytestComponent } from './mytest/mytest.component';
import { NavBarComponent } from './nav/navbar.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { Product } from './product/product.model';
import { TestListForCustomerComponent } from './test-list-for-customer/test-list-for-customer.component';


import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateDiagnosticcentreComponent } from './update-diagnosticcentre/update-diagnosticcentre.component';
import { UpdateTestComponent } from './update-test/update-test.component';

const routes: Routes = [
  {
    path:'addAdmin', 
    component: AddAdminComponent
  },
  {
    path:'home', 
    component: HomeComponent
  },
  
  {
    path:'homelogin', 
    component: HomeLoginComponent
  },
  {
    path:'admin',
    component:AdminComponent

  },
  {
    path:'updateadmin',
    component:AddAdminComponent
  },
  
  {
  path:'addtestincentre',
  component:AddTestInCentreComponent
  },
  {
    path:'admindetailscomponent',
    component:AdminDetailsComponent
    },
    {
      path:'myappointement',
      component:MyappointmentComponent
    },
    {
      path:'createappointement',
      component:CreateAppointmentComponent
    },
    {
      path:'updateappointment',
      component:CreateAppointmentComponent
    },
    {
      path:'updatecustomer',
      component:UpdateCustomerComponent
    },
    {
      path:'logout',
      component:LogoutComponent
    },
    {
      
      path:'updatediagnosticcentre',
      component:UpdateDiagnosticcentreComponent
    },
    {
      path:'updatetest',
      component:UpdateTestComponent
    },
    {
      path:'addcustomer',
      component:AddCustomerComponent
    },
    {
      path:'creatediagnosticcentre',
      component:CreateDiagnosticcentreComponent
    },
    {
      path:'adddiagnosticcentre',
      component:CreateDiagnosticcentreComponent
    },
    
    
    {
      path:'createtest',
      component:CreateTestComponent
    },
    {
      path:'navbar',
      component:NavBarComponent
    },
    {
      path:'product',
      component:Product
    },
    {
      path:'allappointments',
      component:AppComponent
    },
    {
      path:'mytest',
      component:MytestComponent
    },
    {
      path:'testlist',
      component:TestListForCustomerComponent

    },
    {
      path:'productdetails',
      component:ProductDetailsComponent
    },
   
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
