import { createSlice } from '@reduxjs/toolkit';

import { fetchAuth, fetchCheckAuth, fetchRegister } from './asyncActions';

import { Status } from '../../assets/consts';

// TODO - provide types

const initialState = {
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
		builder.addCase(fetchAuth.pending, (state) => {
			state.data = null;
			state.status = Status.LOADING;
		})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchAuth.rejected, (state) => {
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
			.addCase(fetchRegister.fulfilled, (state, action) => {
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
