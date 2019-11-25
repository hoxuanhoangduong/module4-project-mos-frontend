import {Artist} from './artist';
import {User} from './user.interface';

export interface Song {
  id: number;
  title: string;
  name: string;
  releaseDate: number;
  artists: Artist[];
  url: string;
  uploader?: User;
  isDisabled?: boolean;
}
