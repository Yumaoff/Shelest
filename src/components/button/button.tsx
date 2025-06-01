import React from 'react';
import ButtonUI from '../ui/button/button';

interface IButtonProps {
	type?: 'button' | 'submit';
	text?: string;
	icon?: string;
	iconMobile?: string;
	color?: 'primary' | 'secondary' | 'link';
	disabled?: boolean;
	onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
	return <ButtonUI {...props} />;
};

export default Button;
