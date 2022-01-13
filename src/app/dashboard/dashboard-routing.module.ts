import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'',component:DashboardComponent,children:[
    {path:'', redirectTo: 'home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent} ,
    {path:'product',component:ProductComponent}, 
    {path:'gallery',component:GalleryComponent}, 
    {path:'contact-us',component:ContactUsComponent},
    {path:'register',component:RegisterComponent} 
  ]}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
