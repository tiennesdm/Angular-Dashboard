import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { MapComponent } from "./shared/widget/map/map.component";
import { AuthGuard } from "./guards/auth-guard.guard";
import {UploadFileComponent} from "./shared/widget/upload-file/upload-file.component";
import {VideoPlayerComponent} from "./shared/widget/video-player/video-player.component";
import {BlogEditorComponent} from './components/blog-editor/blog-editor.component'
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    //  canActivate: [AuthGuardGuard],
 //   canActivate: [AuthGuard],

    children: [
      {
        path: "",
        component: DashboardComponent
        //  canActivate: [AuthGuardGuard]
      },
      {
        path: "map",
        component: MapComponent
        // canActivate: [AuthGuardGuard]
        //  canActivate: [AuthGuardGuard]
      },
      {
        path:"upload-file",
        component:UploadFileComponent
      },
      { path:"videoPlayer", component:VideoPlayerComponent},
      {path:'blog-Editor', component:BlogEditorComponent}
    ]
  },
  { path: "dashboard", component: MapComponent },
  { path: "auth", loadChildren: "./pages/auth/auth.module#AuthModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
