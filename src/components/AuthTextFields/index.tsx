import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IconButton, InputAdornment, TextField } from '@mui/material';

import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

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
        <TextField
            // className={styles.field}
            label='E-Mail'
            fullWidth
            // error={Boolean(errors.LoginError?.message)}
            helperText={errors.email?.message}
            {...register('email', { required: 'Укажите e-mail' })}
            type='email'
            inputProps={{ maxLength: 40 }}
            required={true}
        />
        <TextField
            // className={styles.field}
            label='Пароль'
            fullWidth
            // error={Boolean(errors.LoginError?.message)}
            // helperText={errors.LoginError?.message}
            {...register('password', { required: 'Введите пароль' })}
            type={showPassword ? 'text' : 'password'}
            required={true}
            inputProps={{ maxLength: 40 }}
            InputProps={{
              endAdornment:
                  <InputAdornment position='end' sx={{ marginRight: 1 }}>
                    <IconButton onClick={onPasswordShowClickHandler}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
            }}
        />
      </>
  );
};
