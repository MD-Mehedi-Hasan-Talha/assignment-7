"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Modal = ({ children, lang }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const pathname = usePathname();
  const pattern = /\/videos\/[^/]+$/;

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.push(`/${lang}`);
  }

  if (!pattern.test(pathname)) {
    return null;
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="bg-color-bg text-white shadow-md border border-white flex flex-col p-6 rounded-md"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image
          src="/assets/icons/xmark.svg"
          alt="close"
          width={30}
          height={30}
        />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
