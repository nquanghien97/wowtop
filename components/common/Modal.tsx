import clsx from 'clsx';
import {
  useCallback, useRef, useEffect, PropsWithChildren, RefObject,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  background?: string;
  className?: string;
  ref?: RefObject<HTMLDivElement>
}

export default function Modal(props: ModalProps) {
  const {
    children,
    open,
    onClose,
    background,
    className,
    ref,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback((event: MouseEvent) => {
    if (
      wrapperRef
      && wrapperRef.current
      && !wrapperRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });

    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  return open ? createPortal(
    <div className="fixed inset-0 z-[1000]" ref={ref}>
      <div className={clsx('fixed inset-0 z-[-1] bg-[#0b0b0b80]', background)} />
      <div className={clsx('opacity-100 flex justify-center h-screen', className)}>
        <div ref={wrapperRef} className="relative m-auto rounded">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  ) : null;
}