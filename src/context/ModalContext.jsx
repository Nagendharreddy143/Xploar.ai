import React, { createContext, useState, useContext } from "react";

// Create the context
const ModalContext = createContext();

// Create a custom hook for easy access to the context
export const useModal = () => useContext(ModalContext);

// Create the provider component that will wrap your app
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Provide the state and functions to all children
  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
