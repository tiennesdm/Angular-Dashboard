import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AngularMaterialModule } from "./../../shared/angular-material/angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AngularMaterialModule, AuthRoutingModule, FormsModule]
})
export class AuthModule {}
