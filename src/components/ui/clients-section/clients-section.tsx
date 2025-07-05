import React, { useState } from 'react';
import styles from './clients-section.module.scss';

interface IClientsSectionUIProps {
	title: string;
	subTitle: string;
	images: string[];
}

export const ClientsSectionUI: React.FC<IClientsSectionUIProps> = ({
	title,
	subTitle,
	images,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [transitionDirection, setTransitionDirection] = useState<
		'left' | 'right'
	>('right');

	const nextSlide = () => {
		setTransitionDirection('right');
		setCurrentIndex((prevIndex) =>
			prevIndex >= images.length - 3 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setTransitionDirection('left');
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 3 : prevIndex - 1
		);
	};

	const extendedImages = [...images, ...images.slice(0, 3)];
	const visibleImages = extendedImages.slice(currentIndex, currentIndex + 3);

	return (
		<section className={styles.section} id='clients'>
			<div className={styles.titles}>
				<p className={styles.subtitleSection}>{subTitle}</p>
				<h2 className={styles.titleSection}>{title}</h2>
			</div>
			<div className={styles.background}>
				<div className={styles.content}>
					<button className={styles.arrowButton} onClick={prevSlide}>
						<span className={styles.arrowLeft}>&lt;</span>
					</button>

					<div className={styles.carouselContainer}>
						{visibleImages.map((image, index) => (
							<div
								key={`${currentIndex}-${index}`}
								className={`${styles.imageWrapper} ${styles[transitionDirection]}`}
							>
								<img
									src={image}
									alt={`Slide ${currentIndex + index}`}
									className={styles.carouselImage}
								/>
							</div>
						))}
					</div>

					<button className={styles.arrowButton} onClick={nextSlide}>
						<span className={styles.arrowRight}>&gt;</span>
					</button>
				</div>
			</div>
		</section>
	);
};
