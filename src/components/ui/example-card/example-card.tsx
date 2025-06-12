import React from 'react';
import styles from './example-card.module.scss';

export interface IExampleCardUIProps {
	title?: string;
	description?: string;
	image?: string;
	onClick?: () => void;
}

const ProjectCardUI: React.FC<IExampleCardUIProps> = ({
	title,
	description,
	image,
	onClick,
}) => {
	return (
		<div className={styles.card}>
			<img
				className={styles.cardImg}
				src={image}
				alt={title}
				onClick={onClick}
			/>
			<div className={styles.text}>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCardUI;
