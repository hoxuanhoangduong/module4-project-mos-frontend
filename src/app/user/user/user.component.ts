import {Component, Input, OnInit} from '@angular/core';
import {Token} from '../../model/token';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;
  currentUser: Token;
  isLoggedIn: boolean;

  @Input() msaapDisplayTitle = true;
  @Input() msaapDisplayPlayList = true;
  @Input() msaapPageSizeOptions = [6];
  @Input() msaapDisplayVolumeControls = true;
  @Input() expanded = false;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'senonita',
      link: 'https://data25.chiasenhac.com/downloads/2033/3/2032396/128/Senorita%20-%20J_Fla.mp3'
    }
  ];

  constructor(private router: Router, private authService: AuthService) {
  }

  onActivate(elementRef) {
    elementRef.loginAction.subscribe((next) => {
      this.isLoggedIn = true;
      this.username = next.username;
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    // window.location.reload();
  }

  ngOnInit() {
  }

}
