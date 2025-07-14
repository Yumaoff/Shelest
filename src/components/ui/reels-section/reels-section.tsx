import React, { useState } from 'react';
import styles from './reels-section.module.scss';

interface IReelsSectionUIProps {
	title: string;
	subTitle: string;
	videos: string[];
	stats: {
		clients: number;
		reels: number;
		experience: number;
	};
}

export const ReelsSectionUI: React.FC<IReelsSectionUIProps> = ({
	title,
	subTitle,
	videos,
	stats,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex >= videos.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? videos.length - 1 : prevIndex - 1
		);
	};

	return (
		<section className={styles.section} id='reels'>
			<div className={styles.titles}>
				<p className={styles.subtitleSection}>{subTitle}</p>
				<h2 className={styles.titleSection}>{title}</h2>
			</div>
			<div className={styles.background}>
				<div className={styles.content}>
					<button className={styles.arrowButton} onClick={prevSlide}>
						<span className={styles.arrow}>&lt;</span>
					</button>

					<div className={styles.reelContainer}>
						<div className={styles.reelWrapper}>
							<img
								src={videos[currentIndex]}
								alt={`Reel ${currentIndex}`}
								className={styles.reelMedia}
							/>
						</div>
					</div>

					<button className={styles.arrowButton} onClick={nextSlide}>
						<span className={styles.arrow}>&gt;</span>
					</button>
				</div>
				<div className={styles.statsContainer}>
					<div className={styles.statItem}>
						<span className={styles.statNumber}>{stats.clients}+</span>
						<span className={styles.statLabel}>Довольных клиентов</span>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statNumber}>{stats.reels}+</span>
						<span className={styles.statLabel}>Созданных роликов</span>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statNumber}>{stats.experience}</span>
						<span className={styles.statLabel}>Года опыта</span>
					</div>
				</div>
			</div>
			<div className={styles.orderButtonContainer}>
				<a
					href='https://t.me/shelestt_liss'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.orderButton}
				>
					Заказать монтаж
				</a>
			</div>
		</section>
	);
};
