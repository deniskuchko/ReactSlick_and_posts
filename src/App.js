import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

const photos = [
  {
    name: "Photos 1",
    url:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
  },
  {
    name: "Photos 2",
    url:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
  },
  {
    name: "Photos 3",
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/10best-cars-group-cropped-1542126037.jpg",
  },
  {
    name: "Photos 4",
    url:
      "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/98_-_fastest_accelerating_road_cars_-_ferrari_f8_tributo.jpg?itok=cK2YYgq2",
  },
];
function App() {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };
  return (
    <div className="App">
      <div className="container pt-3">
        <div className="col">
          <div className="col">
            <PostForm />
          </div>
          <div className="row">
            <div className="col">
              <h1>Синхронные посты</h1>
              <Posts />
            </div>
            <div className="col">
              <h1>Асинхронные посты</h1>

              <FetchedPosts />
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.name}>
              <img
                width="100%"
                height="400px"
                src={photo.url}
                alt={photo.name}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
