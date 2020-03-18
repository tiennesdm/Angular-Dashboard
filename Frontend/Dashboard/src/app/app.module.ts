import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainLayoutModule } from "./layout/main-layout/main-layout.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import "hammerjs";
import { AppComponent } from "./app.component";
import { AuthModule } from "./pages/auth/auth.module";
import { AuthInterceptor } from "./pages/auth/auth-interceptor";

import { ErrorInterceptor } from "./interceptor/error-interceptor";
import { ErrorComponent } from "./shared/components/error/error.component";
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
    MainLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
