import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductComponent,
    GalleryComponent,
    ContactUsComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // FormsModule
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
