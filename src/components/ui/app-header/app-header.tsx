import React from 'react';
import styles from './app-header.module.scss';
import { Menu } from '../../../components/menu/menu';
import Button from '../../button/button';

interface AppHeaderUIProps {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}

export const AppHeaderUI: React.FC<AppHeaderUIProps> = ({
	isMenuOpen,
	toggleMenu,
}) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				{/* Логотип */}
				<a href='#' className={styles.logo}>
					<h1>shelest.pro</h1>
				</a>

				{/* Навигационное меню */}
				<div
					className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}
				>
					<Menu variant={isMenuOpen ? 'mobile' : 'header'} />
				</div>

				{/* Связь с заказчиком*/}
				<div className={`${styles.button}`}>
					<Button type='button' text='заказать монтаж' color='link' />
				</div>

				{/* Бургер-иконка для мобильной версии */}
				<div
					className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
					onClick={toggleMenu}
				></div>
			</div>
		</header>
	);
};
