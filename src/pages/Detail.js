import React from "react";
import { useLocation, useParams } from "react-router-dom";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

import GoStore from "../components/GoStore";

SwiperCore.use([Navigation, Pagination]);

function Detail() {
  const location = useLocation();

  const selectedStoreInfo = location.state.item;
  const { name } = useParams();

  return (
    <section className="detail">
      <div className="inner">
        <div className="detail__store-image">
          <Swiper
            className="detail__store-cover"
            loop={true}
            autoplay={{
              deplay: 500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {selectedStoreInfo.subImage.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img
                    src={item}
                    className="detail__store-cover-img"
                    alt="store detail"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="detail__store-info">
          <div className="store__name-rate">
            <span className="detail__store-name">{name}</span>
            <span className="detail__store-rate">{selectedStoreInfo.rate}</span>
          </div>
          <div className="store__address-operate">
            <span className="detail__store-address">
              {selectedStoreInfo.address}
            </span>
            <span className="detail__store-operate">
              {selectedStoreInfo.operate}
            </span>
          </div>

          <div className="detail__store-des">
            <p>{selectedStoreInfo.description}</p>
          </div>
        </div>
      </div>
      <GoStore />
    </section>
  );
}

export default Detail;
