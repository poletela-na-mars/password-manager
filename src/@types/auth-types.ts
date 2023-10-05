export interface AuthTextFieldsType {
  email: string;
  password: string;
}

export interface RegisterTextFieldsType extends AuthTextFieldsType {
  passwordRepeat: string;
}

export type LoginRegisterValType = 'email' | 'password';
export type RegisterRegisterValType = LoginRegisterValType | 'passwordRepeat';
