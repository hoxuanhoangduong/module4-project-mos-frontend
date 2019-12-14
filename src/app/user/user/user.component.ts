import {Component, Input, OnInit} from '@angular/core';
import {UserToken} from '../../model/userToken';
import {Track} from 'ngx-audio-player';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {PlayingQueueService} from '../../service/playing-queue.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: UserToken;
  isShown = true;

  @Input() msaapDisplayTitle = true;
  @Input() msaapDisplayPlayList = true;
  @Input() msaapPageSizeOptions = [4, 6];
  @Input() msaapDisplayVolumeControls = true;
  @Input() expanded = false;
  @Input() autoPlay: true;

// Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: '',
      link: ''
    }
  ];

  constructor(private router: Router, private authService: AuthService, private playingQueueService: PlayingQueueService) {
    this.authService.currentUserToken.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    );
    this.playingQueueService.currentQueue.subscribe(
      currentQueue => {
        this.msaapPlaylist = currentQueue;
      }
    );
    this.playingQueueService.update.subscribe(
      () => {
        this.msaapDisplayVolumeControls = !this.msaapDisplayVolumeControls;
        const reEnableVolumeControl = setTimeout(() => {
          this.msaapDisplayVolumeControls = true;
          clearTimeout(reEnableVolumeControl);
        }, 0);
      }
    );
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }


  ngOnInit() {
  }
}
