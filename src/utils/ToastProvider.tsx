import { Toaster } from 'react-hot-toast';

export const ToasterProvider = () => {
	return (
		<Toaster
			position='bottom-center'
			toastOptions={{
				style: {
					// TODO - COLOUR - dim-gray
					background: '#6B736A',
					color: '#fff',
					fontSize: 16,
				}
			}} />
	);
};
