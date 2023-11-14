import toast from 'react-hot-toast';

export const copyContent = async (content: string) => {
	try {
		await navigator.clipboard.writeText(content);
		toast.success('Скопировано!');
	} catch (err) {
		toast.error('Ошибка при копировании');
	}
};
