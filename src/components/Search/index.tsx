import { alpha, InputBase, styled } from '@mui/material';

import { ReactComponent as SearchIcon } from '../../assets/img/search-icon.svg';

const StyledSearch = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 30,
	backgroundColor: alpha(theme.palette.common.white, 0.4),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.6),
	},
	marginLeft: 0,
	marginRight: 16,
	width: '70%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		fontWeight: 300,
		color: theme.palette.primary.dark,
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		marginRight: 16,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '8ch',
			'&:focus': {
				width: '12ch',
			},
		},
	},
}));

export const Search = () => {
	return (
		<StyledSearch>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Поиск…'
				inputProps={{ 'aria-label': 'search' }}
			/>
		</StyledSearch>
	);
};
