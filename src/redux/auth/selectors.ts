import { RootState } from '../store';

export const selectIsAuth = (state: RootState) => {
	return Boolean(state.authSlice.data);
};

export const selectGame = (state: RootState) => state.authSlice;