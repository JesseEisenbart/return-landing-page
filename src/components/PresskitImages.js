import React, { useState, useCallback } from "react";
import screenshot_basecamp from "../images/screenshots/screenshot_basecamp.png";
import screenshot_cave from "../images/screenshots/screenshot_cave.png";
import screenshot_city from "../images/screenshots/screenshot_city.png";
import screenshot_forest_entrance from "../images/screenshots/screenshot_forest_entrance.png";
import screenshot_forest from "../images/screenshots/screenshot_forest.png";
import screenshot_gate from "../images/screenshots/screenshot_gate.png";
import screenshot_grasslands from "../images/screenshots/screenshot_grasslands.png";
import screenshot_radio from "../images/screenshots/screenshot_radio.png";
import screenshot_golem from "../images/screenshots/screenshot_golem.png";
import screenshot_den from "../images/screenshots/screenshot_den.png";
import ImageViewer from "react-simple-image-viewer";

const PresskitImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    screenshot_grasslands,
    screenshot_gate,
    screenshot_basecamp,
    screenshot_den,
    screenshot_cave,
    screenshot_city,
    screenshot_golem,
    screenshot_forest_entrance,
    screenshot_radio,
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
    <div className="feature-container"> 
      {images.map((src, index) => (
        <div className="img-container">
          <a href={src} rel="noreferrer" target="_blank">
            <img
              src={src}
              key={index}
              alt=""
              className={`img-feature ${index % 2 === 0 ? "left" : ""}`}
            />
          </a>
        </div>
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

export default PresskitImages
