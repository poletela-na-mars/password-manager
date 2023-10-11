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
