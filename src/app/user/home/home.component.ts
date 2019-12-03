import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.interface';
import {Song} from '../../model/song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  user: User;
  song: Song[];

  constructor(private userService: UserService, private songService: SongService) {
    this.songService.getSongList().subscribe(next => {
      this.song = next;
    });
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getProfile().pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
  }

}
