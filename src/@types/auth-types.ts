export interface User {
	createdAt: string;
	email: string;
	token: string;
	updatedAt: string;
	__v: number;
	_id: string;
}

export type UserData = User | null;

export interface FetchLoginData {
	meta: {
		arg: {
			email: string;
			password: string;
		}
		requestId: string;
		requestStatus: string;
	};
	payload: UserData;
	type: string;
}

export interface AuthTextFieldsType {
	email: string;
	password: string;
}

export interface RegisterTextFieldsType extends AuthTextFieldsType {
	passwordRepeat: string;
}

export type LoginRegisterValType = 'email' | 'password';
export type RegisterRegisterValType = LoginRegisterValType | 'passwordRepeat';

export interface ServerErrorRegisterType {
	location: string;
	msg: string;
	path: RegisterRegisterValType;
	type: string;
	value: string;
}

export interface ServerErrorLoginType {
	msg: string;
	path: LoginRegisterValType;
}
