import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function MainVideoCarousel(props) {
  React.useEffect(() => {
    // Autoplay muted video on mouse hover
    document
      .querySelectorAll("iframe")
      .forEach(iframe => iframe.addEventListener("mouseenter", playVideo));

    function playVideo() {
      this.src = this.src.replace("&autoplay=0", "&autoplay=1");
    }

    document
      .querySelectorAll("iframe")
      .forEach(iframe => iframe.addEventListener("mouseleave", stopVideo));

    function stopVideo() {
      this.src = this.src.replace("&autoplay=1", "&autoplay=0");
    }
  }, []);

  return (
    <main className="swiper-container">
      <div className="swiper mySwiperr">
        <div className="fade-left"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          effect={"coverflow"}
          spaceBetween={6}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: `.next0`,
            prevEl: `.prev0`,
          }}
          height={"200px"}
        >
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[watch]">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/ltfULo-LNNA?controls=0&autoplay=0&mute=1&enablejsapi=1`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </a>
                <div className="vid-info main">
                  <a href="$row[channel]">
                    <img
                      className="channel-icon"
                      src="https://yt3.ggpht.com/BiDYezdkoZBJ_tvkRzoGHNBM4qX6gfXIavl5lpsEz80FIVUfzRBXdSicBhih6GRcAsJEN0Yi5yM=s88-c-k-c0x00ffffff-no-rj"
                      alt="Channel Icon"
                    />
                  </a>
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <a href="$row[channel]">
                    <h4>$row[creator]</h4>
                  </a>
                </div>
                <div className="fade-bottom-minor"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[watch]">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/ltfULo-LNNA?controls=0&autoplay=0&mute=1&enablejsapi=1`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </a>
                <div className="vid-info main">
                  <a href="$row[channel]">
                    <img
                      className="channel-icon"
                      src="https://yt3.ggpht.com/BiDYezdkoZBJ_tvkRzoGHNBM4qX6gfXIavl5lpsEz80FIVUfzRBXdSicBhih6GRcAsJEN0Yi5yM=s88-c-k-c0x00ffffff-no-rj"
                      alt="Channel Icon"
                    />
                  </a>
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <a href="$row[channel]">
                    <h4>$row[creator]</h4>
                  </a>
                </div>
                <div className="fade-bottom-minor"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[watch]">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/ltfULo-LNNA?controls=0&autoplay=0&mute=1&enablejsapi=1`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </a>
                <div className="vid-info main">
                  <a href="$row[channel]">
                    <img
                      className="channel-icon"
                      src="https://yt3.ggpht.com/BiDYezdkoZBJ_tvkRzoGHNBM4qX6gfXIavl5lpsEz80FIVUfzRBXdSicBhih6GRcAsJEN0Yi5yM=s88-c-k-c0x00ffffff-no-rj"
                      alt="Channel Icon"
                    />
                  </a>
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <a href="$row[channel]">
                    <h4>$row[creator]</h4>
                  </a>
                </div>
                <div className="fade-bottom-minor"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[watch]">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/ltfULo-LNNA?controls=0&autoplay=0&mute=1&enablejsapi=1`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </a>
                <div className="vid-info main">
                  <a href="$row[channel]">
                    <img
                      className="channel-icon"
                      src="https://yt3.ggpht.com/BiDYezdkoZBJ_tvkRzoGHNBM4qX6gfXIavl5lpsEz80FIVUfzRBXdSicBhih6GRcAsJEN0Yi5yM=s88-c-k-c0x00ffffff-no-rj"
                      alt="Channel Icon"
                    />
                  </a>
                  <a href="$row[watch]">
                    <h3>$row[title]</h3>
                  </a>
                  <a href="$row[channel]">
                    <h4>$row[creator]</h4>
                  </a>
                </div>
                <div className="fade-bottom-minor"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="$row[watch]">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/ltfULo-LNNA?controls=0&autoplay=0&mute=1&enablejsapi=1`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </a>
                <div className="vid-info main">
                  <a href="$row[channel]">
                    <img
                      className="channel-icon"
                      src="https://yt3.ggpht.com/BiDYezdkoZBJ_tvkRzoGHNBM4qX6gfXIavl5lpsEz80FIVUfzRBXdSicBhih6GRcAsJEN0Yi5yM=s88-c-k-c0x00ffffff-no-rj"
                      alt="Channel Icon"
                    />
                  </a>
                  <a href="$row[watch]">
                    <h3>$rows[title]</h3>
                  </a>
                  <a href="$row[channel]">
                    <h4>$rows[creator]</h4>
                  </a>
                </div>
                <div className="fade-bottom-minor"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="fade-right"></div>
      </div>
      <div className="swiper-button-next next0"></div>
      <div className="swiper-button-prev prev0"></div>
    </main>
  );
}
