import { Status } from '../assets/consts';
import { UserData } from './auth-types';

export interface AuthState {
	data: UserData;
	status: Status;
}
