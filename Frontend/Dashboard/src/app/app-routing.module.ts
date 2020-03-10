import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      }
    ]
  },
  { path: "auth", loadChildren: "./pages/auth/auth.module#AuthModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
