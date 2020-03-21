import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService) {}

  ngOnInit() {
    anime({
      targets: 'span',
      keyframes: [
        {translateY: -10},
        {translateX: 15},
        {translateY: 15},
        {translateX: -10},
        {translateY: 0}
      ],
      duration: 5000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
  signout() {
    this.authService.logout();
  }
}
