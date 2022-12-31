'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Image } from '@/src/interface/site.interface';



interface Props {
  image: Image[];
}

export const SwiperNavigationHome = ({ image }: Props) => {
  return (
    <>
      {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
      >
        {image.map((data, i) => (
          <SwiperSlide key={i}>
            <img
              className="object-cover  w-full h-screen"
              src={data.src}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
