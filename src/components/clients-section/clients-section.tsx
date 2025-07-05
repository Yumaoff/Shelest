import { ClientsSectionUI } from '@ui';

const CAROUSEL_IMAGES = [
	'./src/assets/images/1.jpg',
	'./src/assets/images/2.jpg',
	'./src/assets/images/3.jpg',
	'./src/assets/images/4.jpg',
	'./src/assets/images/5.jpg',
	'./src/assets/images/1.jpg',
];

export const ClientsSection = () => {
	return (
		<ClientsSectionUI
			title='С кем я работала'
			subTitle='мои клиенты'
			images={CAROUSEL_IMAGES}
		/>
	);
};
