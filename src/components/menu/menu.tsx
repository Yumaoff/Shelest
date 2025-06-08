import React from 'react';
import MenuUI from '../ui/menu/menu';

export interface IMenuItem {
	key?: string;
	title: string;
	path: string;
}

interface IMenuProps {
	variant: 'header' | 'footer' | 'mobile';
	onDemoClick?: () => void;
}

const MENU_ITEMS: IMenuItem[] = [
	{ key: 'about_me', title: 'Обо мне', path: '#about' },
	{ key: 'montage_choose', title: 'Выбрать монтаж', path: '#montage_choose' },
	{ key: 'examples', title: 'Примеры работ', path: '#examples' },
];

export const Menu: React.FC<IMenuProps> = ({ variant, onDemoClick }) => {
	return (
		<MenuUI
			variant={variant}
			menuItems={MENU_ITEMS}
			onDemoClick={onDemoClick}
		/>
	);
};
