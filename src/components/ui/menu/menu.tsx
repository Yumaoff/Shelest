import React from 'react';
import styles from './menu.module.scss';
import { IMenuItem } from 'src/components/menu/menu';
import { FormattedMessage } from 'react-intl';

interface IMenuUIProps {
	variant: 'header' | 'footer' | 'mobile';
	menuItems: IMenuItem[];
	onDemoClick?: () => void;
}

const MenuUI: React.FC<IMenuUIProps> = ({
	variant,
	menuItems,
	onDemoClick,
}) => {
	return (
		<nav className={`${styles.menu} ${styles[variant]}`}>
			<ul>
				{menuItems.map((item, index) => (
					<React.Fragment key={item.title}>
						<li>
							<a href={item.path}>
								<FormattedMessage id={item.key} defaultMessage={item.title} />
							</a>
						</li>
						{variant === 'header' && index < menuItems.length - 1 && (
							<span className={styles.separator}>|</span>
						)}
					</React.Fragment>
				))}
				{(variant === 'footer' || variant === 'mobile') && (
					<li>
						<a className={styles.menuButton} onClick={onDemoClick}>
							<FormattedMessage id='order' defaultMessage='ЗАКАЗАТЬ МОНТАЖ' />
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default MenuUI;
