import { ClientsSectionUI } from '@ui';

const CAROUSEL_IMAGES = [
	'./src/assets/clients/1.jpg',
	'./src/assets/clients/2.jpg',
	'./src/assets/clients/3.jpg',
	'./src/assets/clients/4.jpg',
	'./src/assets/clients/5.jpg',
	'./src/assets/clients/1.jpg',
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
