import {Component, OnInit} from '@angular/core';
import {SongService} from '../../service/song.service';
import {Song} from '../../model/song';
import {AddSongToPlaylistService} from '../../service/add-song-to-playlist.service';
import {PlayingQueueService} from '../../service/playing-queue.service';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.interface';
import {Subscription} from 'rxjs';
import {Page} from '../../model/page';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  currentUser: User;
  first: boolean;
  last: boolean;
  pageNumber = 0;
  pageSize: number;
  pages: Page[] = [];
  private message;
  private songList: Song[];
  loading: boolean;
  subscription: Subscription = new Subscription();

  constructor(private songService: SongService, private addSongToPlaylistService: AddSongToPlaylistService,
              private playingQueueService: PlayingQueueService, private userService: UserService) {
    this.userService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    );
  }

  ngOnInit() {
    this.loading = true;
    this.goToPage(this.pageNumber, true);
  }

  goToPage(i: number, scrollUp?: boolean) {
    this.subscription.add(this.songService.getSongList(i, undefined).subscribe(
      result => {
        if (result != null) {
          if (scrollUp) {
            window.scroll(0, 0);
          }
          this.songList = result.content;
          this.songList.forEach((value, index) => {
            this.songList[index].isDisabled = false;
          });
          this.first = result.first;
          this.last = result.last;
          this.pageNumber = result.pageable.pageNumber;
          this.pageSize = result.pageable.pageSize;
          this.pages = new Array(result.totalPages);
          for (let j = 0; j < this.pages.length; j++) {
            this.pages[j] = {pageNumber: j};
          }
          for (const song of this.songList) {
            this.checkDisabledSong(song);
          }
        }
      }, error => {
        this.message = 'Cannot retrieve song list. Cause: ' + error.songsMessage;
      }, () => {
        // for (const song of this.songList) {
        //   if (song.loadingLikeButton) {
        //     song.loadingLikeButton = false;
        //   }
        // }
        this.loading = false;
      }
    ));
  }

  addToPlaylist(song) {
    song.isDisabled = true;
    this.addSongToPlaylistService.emitChange(song);
  }

  addToPlaying(song: Song, event) {
    event.stopPropagation();
    this.playingQueueService.addToQueue(song);
  }

  checkDisabledSong(song: Song) {
    let isDisabled = false;
    for (const track of this.playingQueueService.currentQueueSubject.value) {
      if (song.url === track.link) {
        isDisabled = true;
        break;
      }
    }
    song.isDisabled = isDisabled;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
