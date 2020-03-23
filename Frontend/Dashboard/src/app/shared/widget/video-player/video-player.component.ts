import { Component, OnInit,ViewChild,Renderer2 } from '@angular/core';
import {environment} from './../../../../environments/environment';
const BACKEND_URL = environment.apiUrl + "/";

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video',{static:true}) matVideo;
  video: HTMLVideoElement;
  title:String;
  autoplay:Boolean;
  preload:Boolean;
  fullScreen:Boolean;
  poster;
  download;
  videoUrl;
  routes;
  currentTime;


  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routes = this.route.snapshot.routeConfig.path;

    console.log(this.routes);
    this.title="First Video";
    this.autoplay = true;
    this.preload = true;
    this.fullScreen = true;
    this.poster = '../../../../assets/uploadFile/cloud-2044823_960_720.png';
  //  this.videoUrl= '../../../../assets/Video/NASA Rocket Launch.mp4';
 // this.videoUrl = 'http://localhost:3000/video';
 this.videoUrl= BACKEND_URL + this.routes +'/Launch.mp4';
     this.video = this.matVideo.getVideoTag();




    // Use Angular renderer or addEventListener to listen for standard HTML5 video events

    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
    this.video.addEventListener('pause', () => console.log(
      this.video.currentTime,
      'video ended'));

  }

}
