import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { MapComponent } from "./shared/widget/map/map.component";
import { AuthGuardGuard } from "./guards/auth-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuardGuard]

    // children: [
    //   {
    //     path: "",
    //     component: DashboardComponent,
    //     canActivate: [AuthGuardGuard]
    //   },
    //   {
    //     path: "map",
    //     component: MapComponent
    //     // canActivate: [AuthGuardGuard]
    //   }
    // ]
  },
  { path: "auth", loadChildren: "./pages/auth/auth.module#AuthModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule {}
