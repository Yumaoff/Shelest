import React from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
	text: string;
	speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20 }) => {
	const content = `${text} • `;
	const longContent = Array(10).fill(content).join('');

	return (
		<div className={styles.marqueeContainer}>
			<div
				className={styles.marqueeContent}
				style={{ animationDuration: `${speed}s` }}
			>
				{longContent}
			</div>
		</div>
	);
};
