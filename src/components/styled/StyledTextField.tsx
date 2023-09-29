import { IconButton, InputAdornment, InputBaseComponentProps, TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

import { AuthTextFieldsType } from '../../@types/auth-types';

import styles from '../../scss/components/AuthTextFields.module.scss';

import { ReactComponent as VisibilityOffIcon } from '../../assets/img/visibility-off-icon.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/img/visibility-icon.svg';

type StyledTextFieldProps = {
  label: string;
  helperText: string | undefined;
  register: UseFormRegister<AuthTextFieldsType>;
  registerVal: 'email' | 'password';
  registerStr: string;
  type: string;
  inputProps: InputBaseComponentProps;
  showPassword?: boolean;
  onPasswordShowClickHandler?: () => void;
};

export const StyledTextField = ({
                                  label,
                                  helperText,
                                  register,
                                  registerVal,
                                  registerStr,
                                  type,
                                  inputProps,
                                  onPasswordShowClickHandler,
                                  showPassword
                                }: StyledTextFieldProps) => {
  let IP;
  if (registerVal === 'password') {
    IP = {
      endAdornment:
          <InputAdornment position='end' >
            <IconButton onClick={onPasswordShowClickHandler}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
    };
    type = showPassword ? 'text' : 'password';
  }

  return <TextField
      className={styles.field}
      margin='dense'
      label={label}
      fullWidth
      // error={Boolean(errors.LoginError?.message)}
      helperText={helperText}
      {...register(registerVal, { required: registerStr })}
      type={type}
      inputProps={inputProps}
      InputProps={{ sx: { borderRadius: 30 }, ...IP }}
      required={true}
      autoComplete={'on'}
  />
};
