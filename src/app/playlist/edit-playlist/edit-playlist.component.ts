import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {PlaylistService} from '../../service/playlist.service';
import {Playlist} from '../../model/playlist';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {
  @Input() id: number;
  loading = false;
  error = false;
  message: string;
  editPlaylistForm: FormGroup;
  subscription: Subscription = new Subscription();
  flag: boolean;
  playlist: Playlist;
  @Output() editPlaylist = new EventEmitter();

  constructor(private modalService: NgbModal, private fb: FormBuilder,
              private route: ActivatedRoute, private router: Router, private authService: AuthService,
              private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getPlayListDetail(this.id).subscribe(next => {
      this.playlist = next;
    });
    this.editPlaylistForm = this.fb.group({
        name: ['', Validators.required],
      }
    );
    this.flag = true;
  }

  switchStatusEditButton() {
    this.flag = !this.flag;
  }

  edit(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.editPlaylistForm.value.name = this.playlist.name;

      this.message = null;
    }, () => {
      this.editPlaylist.emit();
    });
  }

  onSubmit() {
    this.subscription.add(this.playlistService.editPlaylist(this.editPlaylistForm.value, this.id).subscribe(
      () => {
        this.error = false;
        this.message = 'Playlist edited successfully!';
        this.editPlaylistForm.reset({name});
      },
      error => {
        this.error = true;
        this.message = 'Failed to edit playlist. Cause: ' + error.message;
      }
    ));
  }
}
