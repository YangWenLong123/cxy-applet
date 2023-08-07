import { get, post } from '@/server/index.js';

export const getImageList = () => {
	return get('/upload/get');
};
