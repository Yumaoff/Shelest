import React from 'react';
import styles from './example-section.module.scss';

interface IExampleSectionUIProps {
	title: string;
	subTitle: string;
	children: React.ReactNode;
}

export const ExampleSectionUI: React.FC<IExampleSectionUIProps> = ({
	title,
	subTitle,
	children,
}) => {
	return (
		<section className={styles.section} id='examples'>
			<div className={styles.titles}>
				<p className={styles.subtitleSection}>{subTitle}</p>
				<h2 className={styles.titleSection}>{title}</h2>
			</div>
			<div className={styles.background}>
				<div className={styles.content}>
					<div className={styles.cardsContainer}>{children}</div>
				</div>
			</div>
		</section>
	);
};
