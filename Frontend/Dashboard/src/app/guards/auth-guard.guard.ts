import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuth = this.authService.getIsAuth();
    //const isAuth = true;
    console.log("auth", isAuth);
    if (!isAuth) {
      this.router.navigate(["auth/login"]);
    }
    return true;
  }
}
