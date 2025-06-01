import React from 'react';
import styles from './button.module.scss';

interface IButtonUIProps {
	type?: 'button' | 'submit';
	text?: string;
	icon?: string;
	iconMobile?: string;
	color?: 'primary' | 'secondary' | 'link';
	disabled?: boolean;
	onClick?: () => void;
}

const ButtonUI: React.FC<IButtonUIProps> = ({
	type = 'button',
	text,
	icon,
	iconMobile,
	color = 'primary',
	onClick,
	disabled,
}) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[color]}`}
			onClick={onClick}
			disabled={disabled}
		>
			{text && <span className={`${styles['text']}`}>{text}</span>}
			{(icon || iconMobile) && (
				<span className={styles.icon}>
					{icon && (
						<img
							src={icon}
							alt='button-icon'
							className={`${styles['desktop-icon']}`}
						/>
					)}
					{iconMobile && (
						<img
							src={iconMobile}
							alt='button-icon'
							className={`${styles['mobile-icon']}`}
						/>
					)}
				</span>
			)}
		</button>
	);
};

export default ButtonUI;
