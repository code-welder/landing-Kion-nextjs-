import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { useKeyPress } from 'hooks';

import CloseIcon from '@icons/close.svg';
import useBodyOverflowStyle from 'hooks/useBodyOverflowStyle';

interface ModalProps {
  open?: boolean;
  id?: string;
  className?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

function Modal({ open, id, className, onClose, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const setBodyOverflow = useBodyOverflowStyle();

  const close = () => setIsOpen(false);
  useKeyPress('Escape', close);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      setBodyOverflow('hidden');
    } else {
      setIsOpen(false);
      setBodyOverflow('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!isOpen && onClose) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      id={id}
      className={clsx(styles.wrapper, 'hide-scrollbar', isOpen && styles.open)}
      onClick={close}
    >
      <button
        className={styles.close}
        onClick={close}
      >
        <CloseIcon />
      </button>
      <div
        className={clsx(styles.inner, className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
