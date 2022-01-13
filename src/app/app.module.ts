import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule} from "./dashboard/dashboard.module";
import { DashboardComponent } from './dashboard/dashboard.component';

import { MyserviceService } from './myservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from  '@angular/common/http';



// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DashboardModule,
    ReactiveFormsModule,
  ],
  providers: [ AuthGuard , MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
