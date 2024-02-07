import { useState } from "react";
import "./App.css";
import { VideoSwiper } from "./component/Swiper/Swiper";
import { Modal } from "./component/Modal/Modal";
import { createPortal } from "react-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState();

  const handleModalOpen = (data) => {
    setSlide(data);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <VideoSwiper open={handleModalOpen} />
      {isOpen &&
        slide &&
        createPortal(
          <Modal slide={slide} close={handleModalClose} />,
          document.getElementById("modal")
        )}
    </>
  );
}

export default App;
