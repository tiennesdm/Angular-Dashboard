import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainLayoutModule } from "./component/main-layout/main-layout.module";
//import { DashboardComponent } from "./pages/dashboard/dashboard.component";
//import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent
    // DashboardComponent
    //  MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
