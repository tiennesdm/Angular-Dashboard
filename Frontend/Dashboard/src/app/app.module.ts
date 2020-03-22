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
import { CodeEditorModule } from '@ngstack/code-editor';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import {
  MatDividerModule,


} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    BlogEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    DocumentEditorModule,
    MatDividerModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
