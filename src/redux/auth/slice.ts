import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchLogin, fetchCheckAuth, fetchRegister } from './asyncActions';

import { Status } from '../../assets/consts';
import { AuthState } from '../../@types/redux-types';
import { UserData } from '../../@types/auth-types';

const initialState: AuthState = {
	data: null,
	status: Status.LOADING,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.data = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchLogin.pending, (state) => {
			state.data = null;
			state.status = Status.LOADING;
		})
			.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<UserData>) => {
				state.data = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchLogin.rejected, (state) => {
				state.data = null;
				state.status = Status.ERROR;
			})

			.addCase(fetchCheckAuth.pending, (state) => {
				state.data = null;
				state.status = Status.LOADING;
			})
			.addCase(fetchCheckAuth.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchCheckAuth.rejected, (state) => {
				state.data = null;
				state.status = Status.ERROR;
			})

			.addCase(fetchRegister.pending, (state) => {
				state.data = null;
				state.status = Status.LOADING;
			})
			.addCase(fetchRegister.fulfilled, (state, action: PayloadAction<UserData>) => {
				state.data = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchRegister.rejected, (state) => {
				state.data = null;
				state.status = Status.ERROR;
			})
	}
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
