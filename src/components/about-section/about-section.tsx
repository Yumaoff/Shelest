import React from 'react';
import styles from './about-section.module.scss';

export const AboutSection = () => {
	return (
		<section className={styles.section} id='about'>
			<div className={styles.titles}>
				<p className={styles.subtitleSection}>ОБО МНЕ</p>
				<h2 className={styles.titleSection}>Елизавета SHELEST</h2>
			</div>
			<div className={styles.background}>
				<div className={styles.content}>
					<div className={styles.aboutText}>
						<span className={styles.leftText}>МОНТИРУЮ С ЛЮБОВЬЮ</span>
						<span className={styles.textContainer}>
							<span>
								Всю жизнь занимаюсь творчеством, создаю монтаж, который помогает
								моим клиентам увеличить прибыть и привлечь людей
							</span>
							<span>
								Сильные стороны: - индивидуальный подход - работаю на качество -
								не нарушаю дедлайны - знаю как выделить ваш ролик среди других
							</span>
						</span>
						<img
							className={styles.floatImage}
							src='src/assets/person1.png'
							alt='Елизавета Shelest'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
