import { FC } from 'react';
import styles from './modal.module.scss';
import ModalOverlayUI from '../modal-overlay/modal-overlay';

interface ModalUIProps {
	onClose: (event: React.MouseEvent) => void;
	children: React.ReactNode;
}

const ModalUI: FC<ModalUIProps> = ({ onClose, children }) => {
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.content}>{children}</div>
			</div>
			<ModalOverlayUI onClose={onClose} />
		</>
	);
};

export default ModalUI;
