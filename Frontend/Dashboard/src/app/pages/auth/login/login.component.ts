import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription, from } from "rxjs";
import { AuthService } from "./../../../services/auth.service";

//import { scriptUrl } from "./../../../../assets/scriptUrl.json";
var notification;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  notification;
  @Input("script") param: any;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.username, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
