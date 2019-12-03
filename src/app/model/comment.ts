import {User} from './user.interface';

export interface Comment {
  isDisabled?: boolean;
  id?: number;
  content?: string;
  localDateTime?: Date;
  user?: User;
}
