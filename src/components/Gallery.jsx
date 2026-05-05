import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";

const images = [
  "assets/images/bt1.jpg",
  "assets/images/bt2.jpg",
  "assets/images/bt3.jpg",
  "assets/images/bt4.jpg",
  "assets/images/bt1.jpg",
  "assets/images/bt2.jpg",
  "assets/images/bt3.jpg",
  "assets/images/bt4.jpg",
];

const Gallery = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="table-slider"]', {});
    return () => Fancybox.destroy();
  }, []);

  return (
    <div className="row bg-amber-300" id="gallery">
      <div className="col-lg-10 m-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          className="book-table-img-slider"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <a
                href={img}
                data-fancybox="table-slider"
                className="book-table-img back-img"
                style={{ backgroundImage: `url(${img})` }}
              ></a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-wp">
          <div className="swiper-button-prev swiper-button">
            <i className="uil uil-angle-left"></i>
          </div>
          <div className="swiper-button-next swiper-button">
            <i className="uil uil-angle-right"></i>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Gallery;
