import React, { useState, useCallback } from "react";
import cave from "../Screenshots/cave.png";
import forest from "../Screenshots/forest.png";
import graveyard from "../Screenshots/graveyard.png";
import ship from "../Screenshots/ship.png";
import ImageViewer from "react-simple-image-viewer";

const Images = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    cave,
    forest,
    graveyard,
    ship,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="images-container"> 
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          alt=""
          className={`img-feature ${index % 2 === 0 ? "left" : ""}`}
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(41,29,43,0.7)"
          }}
        />
      )}
    </div>
  );
}

export default Images
