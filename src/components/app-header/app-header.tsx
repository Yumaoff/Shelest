import React, { FC } from 'react';
import { AppHeaderUI } from '@ui';

interface AppHeaderProps {
	currentLanguage: string;
	onLanguageChange: (newLocale: string) => void;
}

export const AppHeader: FC<AppHeaderProps> = ({}) => {
	// Состояние для открытия/закрытия мобильного меню
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<AppHeaderUI
			isMenuOpen={isMenuOpen}
			toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
		/>
	);
};
