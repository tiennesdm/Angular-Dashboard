import { Component, OnInit,ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video',{static:true}) matVideo;
  @ViewChild('matDivider',{static:true}) myvideo;
  video: HTMLVideoElement;
  title:String;
  autoplay:Boolean;
  preload:Boolean;
  fullScreen:Boolean;
  poster;
  download;
  videoUrl;


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.title="First Video";
    this.autoplay = true;
    this.preload = true;
    this.fullScreen = true;
    this.poster = '../../../../assets/uploadFile/cloud-2044823_960_720.png';
    this.videoUrl= '../../../../assets/Video/NASA Rocket Launch.mp4';
    console.log(this.matVideo);
    console.log(this.myvideo);
     this.video = this.matVideo.getVideoTag();
    // console.log(this.matVideo.getVideoTag());

    // Use Angular renderer or addEventListener to listen for standard HTML5 video events

    this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
    this.video.addEventListener('ended', () => console.log('video ended'));
  }

}
