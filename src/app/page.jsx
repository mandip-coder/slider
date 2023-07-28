"use client";
import { Fragment, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
export default function Home() {
  const [cur, setCur] = useState(1);
  const [auto, setAuto] = useState(true);
  let slider = document.getElementsByClassName("slider");
  let width = cur * 300;

  const sliderImage = [
    { src: "1.jpg" },
    { src: "2.jpg" },
    { src: "3.jpg" },
    { src: "4.jpg" },
    { src: "5.jpg" },
    { src: "6.jpg" },
  ];

  const next = () => {
    if (cur !== sliderImage.length - 1) {
      slider[0].style.transform = `translateX(-${width}px)`;
      setCur(cur + 1);
      console.log(cur);
    } else {
      setCur(0);
      console.log(cur);
    }
  };

  const prev = () => {
    if (cur === 1) {
      setCur(1);
      slider[0].style.transform = `translateX(-${width}px)`;
      console.log(cur);
    }
  };

  // auto &&
  //   setInterval(() => {
  //     next();
  //   }, 1000);
  return (
    <Fragment>
      <div className="container">
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImage.map((slide) => {
              return (
                <div className="item-wrapper" key={slide.src}>
                  <img
                    src={slide.src}
                    alt={slide.src.substring(0, 1) + "-img"}
                    onClick={next}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrows">
          <div className="prev" onClick={prev}>
            <AiOutlineLeftCircle />
          </div>
          <div className="next" onClick={next}>
            <AiOutlineRightCircle />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
