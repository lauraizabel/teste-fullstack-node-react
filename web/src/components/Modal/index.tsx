import React, { JSXElementConstructor, ReactElement } from 'react';
import { Modal as ModalUI } from '@material-ui/core';

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const Modal: React.FC<IModalProps> = ({ children, handleClose, open }) => (
  <ModalUI open={open} onClose={handleClose} disableBackdropClick>
    {children}
  </ModalUI>
);

export default Modal;
