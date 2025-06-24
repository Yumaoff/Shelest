import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalUI from '../ui/modal/modal';

interface TModalProps {
	onClose: () => void;
	children: React.ReactNode;
	isOpen: boolean;
}

const Modal: FC<TModalProps> = ({ onClose, children, isOpen }) => {
	const modalRoot = document.getElementById('modals');

	useEffect(() => {
		const handleClose = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleClose);
		return () => document.removeEventListener('keydown', handleClose);
	}, [onClose]);

	if (!modalRoot || !isOpen) return null;

	return ReactDOM.createPortal(
		<ModalUI onClose={onClose}>{children}</ModalUI>,
		modalRoot
	);
};

export default Modal;
