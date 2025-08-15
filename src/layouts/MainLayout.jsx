import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WaitlistModal from "../components/common/WaitlistModal";

const MainLayout = ({ children, page }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Pass the modal opener function to children that need it
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onOpenModal: handleOpenModal, page });
    }
    return child;
  });

  return (
    <>
      <Navbar onOpenModal={handleOpenModal} page={page} />
      <main>{childrenWithProps}</main>
      <Footer onOpenModal={handleOpenModal} />
      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default MainLayout;
