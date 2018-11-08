import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
// Static data
import images from "../images/images";

const ImagesPage = ({ slideIndex, hub }) => {
  const imageDivs = Object.values(images).map((img, index) => {
    return (
      <div key={index}>
        <img src={img} alt={`Slide number ${index}`} />
      </div>
    );
  });

  useEffect(
    () => {
      setInterval(changeSlide, 10 * 1000);
    },
    [hub]
  );

  const changeSlide = () => {
    hub.invoke("ChangeSlide", "right");
  };

  return (
    <div>
      <Carousel
        selectedItem={slideIndex}
        infiniteLoop={true}
        autoPlay={false}
        showArrows={false}
        showIndicators={false}
        useKeyboardArrows={true}
        dynamicHeight={true}
        showThumbs={false}
        transitionTime={1000}
      >
        {imageDivs}
      </Carousel>
    </div>
  );
};

export default ImagesPage;
