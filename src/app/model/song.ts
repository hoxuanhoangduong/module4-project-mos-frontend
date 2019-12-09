import {Artist} from './artist';
import {User} from './user.interface';

export interface Song {
  id: number;
  title: string;
  releaseDate: number;
  artists: Artist[];
  url: string;
  uploader?: User;
  comments?: Comment[];
  isDisabled?: boolean;
  listeningFrequency?: number;
  loadingLikeButton?: boolean;
  liked?: boolean;
}
