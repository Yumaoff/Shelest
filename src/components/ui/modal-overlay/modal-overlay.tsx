import { FC } from 'react';
import styles from './modal-overlay.module.scss';

interface ModalOverlayUIProps {
	onClose: (event: React.MouseEvent) => void;
}

const ModalOverlayUI: FC<ModalOverlayUIProps> = ({ onClose }) => {
	return <div className={styles.overlay} onClick={onClose}></div>;
};

export default ModalOverlayUI;
