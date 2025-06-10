import React, { ReactNode } from 'react';
import styles from './app-section.module.scss';

interface AppSectionProps {
	title: ReactNode;
	subTitle: string;
	children: ReactNode;
}

export const AppSectionUI: React.FC<AppSectionProps> = ({
	title,
	subTitle,
	children,
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.titles}>
				<p className={styles.subtitleSection}>{subTitle}</p>
				<h2 className={styles.titleSection}>{title}</h2>
			</div>
			<div className={styles.content}>
				{' '}
				<div className={styles.divBackground}>{children}</div>
			</div>
		</section>
	);
};
