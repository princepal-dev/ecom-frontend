import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import { bannerList } from "../../utils";
import { Link } from "react-router-dom";

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

export default function HeroBanner() {
  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerList.map((banner, i) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}
            >
              <div className="flex items-center justify-center">
                <div className="hidden lg:flex justify-center w-1/2 p-8">
                  <div className="text-center">
                    <h3 className="text-3xl text-white font-bold">
                      {banner.title}
                    </h3>
                    <h1 className="text-5xl text-white font-bold mt-2">
                      {banner.subtitle}
                    </h1>
                    <p className="text-white font-bold mt-4">
                      {banner.description}
                    </p>
                    <Link
                      to="/products"
                      className="mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                    >
                      Shop
                    </Link>
                  </div>
                </div>
                <div className="w-full flex justify-center lg:w-1/2 p-4">
                  <img src={banner.image} alt="banner-img" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
