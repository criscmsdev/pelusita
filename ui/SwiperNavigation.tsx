'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import { Image } from '@/src/interface/site.interface';

interface Props {
  images: Image[];
}

export function SwiperNavigation(props: Props) {
  const { images } = props;
  // console.log('images', images);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        { images ? images.map((data, i) => (
          <SwiperSlide key={i}>
            <img
              className=" object-contain mx-auto w-full"
              src={
                data.src ||
                // page?.node.dataPage.seoPage?.image?.src! ||
                'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
              }
              alt={
                data.alt ||
                // page?.node.dataPage.seoPage?.image?.alt! ||
                'image description'
              }
            />
          </SwiperSlide>
        ))
        :
        <SwiperSlide>
            <img
              className="object-contain w-full h-full"
              src={'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
              }
              alt={'image description'
              }
            />
          </SwiperSlide>
      }
      </Swiper>
    </>
  );
}
