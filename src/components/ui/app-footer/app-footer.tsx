import React from 'react';
import { Menu } from '../../menu/menu';
import styles from './app-footer.module.scss';

interface AppFooterUIProps {
	onDemoClick?: () => void;
}

export const AppFooterUI: React.FC<AppFooterUIProps> = ({ onDemoClick }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.menuContainer}>
				<Menu variant='footer' onDemoClick={onDemoClick} />
			</div>
			<div className={styles.contacts}>
				<ul className={styles.contactList}>
					<li className={styles.contact}>
						<a href='https://t.me/shelestt_liss'>Telegram</a>
					</li>
					<li className={styles.contact}>
						<a>VK</a>
					</li>
					<li className={styles.contact}>
						<a>Inst</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
