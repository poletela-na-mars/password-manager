import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { StyledTextField } from '../styled/StyledTextField';

import { AuthTextFieldsType } from '../../@types/auth-types';

type AuthTextFieldsProps = {
  errors: FieldErrors<AuthTextFieldsType>; // TODO - extend errors type
  register: UseFormRegister<AuthTextFieldsType>;
  showPassword: boolean;
  onPasswordShowClickHandler: () => void;
};

export const AuthTextFields = ({ errors, register, showPassword, onPasswordShowClickHandler }: AuthTextFieldsProps) => {
  return (
      <>
        <StyledTextField label='E-Mail' helperText={errors.email?.message} register={register} registerVal='email'
                         registerStr='Введите e-mail' type='email' inputProps={{ maxLength: 40 }} />
        <StyledTextField label='Пароль' helperText={errors.password?.message} register={register} registerVal='password'
                         registerStr='Введите пароль' type='password' inputProps={{ maxLength: 40 }}
                         onPasswordShowClickHandler={onPasswordShowClickHandler} showPassword={showPassword} />
      </>
  );
};
