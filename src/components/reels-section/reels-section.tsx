import { ReelsSectionUI } from '@ui';

const REELS_VIDEOS = [
	'./src/assets/reels/1.jpg',
	'./src/assets/reels/2.png',
	'./src/assets/reels/3.jpg',
	'./src/assets/reels/4.jpg',
	'./src/assets/reels/5.jpg',
	'./src/assets/reels/1.jpg',
];

export const ReelsSection = () => {
	return (
		<ReelsSectionUI
			title='Залетевшие ролики'
			subTitle='Хайлайты'
			videos={REELS_VIDEOS}
			stats={{
				clients: 250,
				reels: 1000,
				experience: 3,
			}}
		/>
	);
};
