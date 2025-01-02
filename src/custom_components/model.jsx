import React, { useEffect, useRef } from 'react';

const Modal = ({ content, isOpen, onClose, onConfirm, closeOnOutsideClick }) => {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen && closeOnOutsideClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnOutsideClick]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
      <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      <div ref={modalRef} className="bg-white w-96 p-8 rounded-lg shadow-lg relative z-10">
        {content}
      </div>
    </div>
  );
};

export default Modal;