"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    location.replace("/");
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
