import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SubVideoCarousel(props) {
  return (
    <section className="swiper-container">
      <h2 className="category">
        <a href="https://of.tv/">Bo Burnham</a>
      </h2>
      <div className="swiper mySwiper">
        <div className="fade-left-minor"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={6}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          navigation={{
            nextEl: `.next${props.carouselNumber}`,
            prevEl: `.prev${props.carouselNumber}`,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 5,
            },
            700: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[link]">
                  <img
                    src="https://img.youtube.com/vi/ltfULo-LNNA/maxresdefault.jpg"
                    alt="#"
                  />
                </a>
                <div className="vid-info">
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <div className="flex-row space-between">
                    <a href="$row[channel]">
                      <h4 className="content-creator">$row[creator]</h4>
                    </a>
                    <h5 className="video-time">Time</h5>
                  </div>
                </div>
                <div className="fade-bottom"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[link]">
                  <img
                    src="https://img.youtube.com/vi/1lDYSpmdLzM/maxresdefault.jpg"
                    alt="#"
                  />
                </a>
                <div className="vid-info">
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <div className="flex-row space-between">
                    <a href="$row[channel]">
                      <h4 className="content-creator">$row[creator]</h4>
                    </a>
                    <h5 className="video-time">Time</h5>
                  </div>
                </div>
                <div className="fade-bottom"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[link]">
                  <img
                    src="https://img.youtube.com/vi/kuGxRbY_wHs/maxresdefault.jpg"
                    alt="#"
                  />
                </a>
                <div className="vid-info">
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <div className="flex-row space-between">
                    <a href="$row[channel]">
                      <h4 className="content-creator">$row[creator]</h4>
                    </a>
                    <h5 className="video-time">Time</h5>
                  </div>
                </div>
                <div className="fade-bottom"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[link]">
                  <img
                    src="https://img.youtube.com/vi/kuGxRbY_wHs/maxresdefault.jpg"
                    alt="#"
                  />
                </a>
                <div className="vid-info">
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <div className="flex-row space-between">
                    <a href="$row[channel]">
                      <h4 className="content-creator">$row[creator]</h4>
                    </a>
                    <h5 className="video-time">Time</h5>
                  </div>
                </div>
                <div className="fade-bottom"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[link]">
                  <img
                    src="https://img.youtube.com/vi/kuGxRbY_wHs/maxresdefault.jpg"
                    alt="#"
                  />
                </a>
                <div className="vid-info">
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <div className="flex-row space-between">
                    <a href="$row[channel]">
                      <h4 className="content-creator">$row[creator]</h4>
                    </a>
                    <h5 className="video-time">Time</h5>
                  </div>
                </div>
                <div className="fade-bottom"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="fade-right-minor"></div>
      </div>
      <div className={`swiper-button-next next${props.carouselNumber}`}></div>
      <div className={`swiper-button-prev prev${props.carouselNumber}`}></div>
    </section>
  );
}
