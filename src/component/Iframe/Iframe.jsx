import React, { useEffect } from "react";
import styles from "./Iframe.module.css";
import Player from "@vimeo/player";

export const Iframe = ({ open, modal = false, id, play }) => {
  useEffect(() => {
    if (modal) {
      const iframe = document.getElementById(`${id}`);
      const player = new Player(iframe);
      if (!iframe.closest(".swiper-slide-active")) {
        player.unload();
      }
      if (iframe.closest(".swiper-slide-active")) {
        player.play();
      }
    }
  }, [play]);

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    open(id);
  };

  return (
    <div id={id} className={styles.conteiner} onClick={handleClick}>
      <iframe
        id={id}
        className={!modal ? styles.frame : ""}
        src="https://player.vimeo.com/video/824804225"
        width={modal ? "500" : "320"}
        height={modal ? "500" : "320"}
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};
