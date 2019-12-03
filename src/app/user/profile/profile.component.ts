import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.interface';
import {Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {SongService} from '../../service/song.service';
import {PlayingQueueService} from '../../service/playing-queue.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  message: string;
  showEditForm = false;
  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authService: AuthService, private songService: SongService,
              private playingQueueService: PlayingQueueService, private userService: UserService) {
    this.userService.getProfile().subscribe(
      currentUser => {
        this.currentUser = currentUser;
      }
    );
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
