import React, { useState } from 'react';
import ExampleCardUI from '../ui/example-card/example-card';
import Modal from '../modal/modal';
import styles from './example-card.module.scss'; // Импорт стилей

export interface IExample {
	id?: number;
	title?: string;
	description?: string;
	image?: string;
	video?: string;
}

interface IExampleCardProps {
	example: IExample;
}

export const ExampleCard: React.FC<IExampleCardProps> = ({ example }) => {
	const { title, description, image, video } = example;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCardClick = () => {
		if (video) {
			setIsModalOpen(true);
		} else {
			alert(`Clicked Card`);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const getYouTubeEmbedUrl = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);
		const videoId = match && match[2].length === 11 ? match[2] : null;
		return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
	};

	return (
		<>
			<ExampleCardUI
				title={title}
				description={description}
				image={image}
				onClick={handleCardClick}
			/>

			{video && (
				<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
					<div className={styles.modalContent}>
						{video.includes('youtube') ? (
							<iframe
								className={styles.embeddedVideo}
								src={getYouTubeEmbedUrl(video)}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								title='YouTube video player'
							/>
						) : (
							<video controls autoPlay className={styles.localVideo}>
								<source src={video} type='video/mp4' />
							</video>
						)}
					</div>
				</Modal>
			)}
		</>
	);
};

export default ExampleCard;
