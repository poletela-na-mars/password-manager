import { createTheme } from '@mui/material';

// TODO - caution. changes in _variables.scss should be here too
export const theme = createTheme({
	palette: {
		primary: {
			// baby powder
			light: '#F7F7F2',
			// brunswick-green
			main: '#294936',
			// dim-gray
			dark: '#6B736A',
		},
		secondary: {
			// honeydew
			main: '#E2EDE1',
		},
		error: {
			// falu red
			main: '#81171b',
		}
	},
	// shape: {
	// 	borderRadius: 30,
	// }
});