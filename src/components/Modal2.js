import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Modal = ({ children, isOpen, setIsOpen, className, ...rest }) => {
  const combined = twMerge(
    "bg-white inset-0 rounded-lg  overflow-hidden shadow-xl transform transition-all ease-out h-10 w-20 ",
    className
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
          @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale3d(0.6, 0.6, 0.6);
              }
            
              50% {
                opacity: 1;
              }
            }

            @keyframes fadeIn {
                from {opacity: 0}
                to {opacity: 0.75}
               }


      `}</style>
      <button className="text-black p-2" onClick={handleOpen}>
        open modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 w-[100vw] h-[100vh] z-30 flex justify-center items-center overflow-hidden">
          <div
            className="fixed inset-0 transition-opacity w-full h-full "
            onClick={handleClose}
          >
            <div
              className="absolute inset-0 bg-slate-600 opacity-75"
              style={{ animation: " fadeIn 0.1s linear" }}
            ></div>
          </div>
          <div
            className={combined}
            style={{
              animation: "zoomIn 0.1s ",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
