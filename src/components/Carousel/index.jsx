import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard, Pagination } from 'swiper/modules';
import Button from '../Button/index';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const CustomCarousel = () => {
  const slidesData = [
    {
      url: 'https://play.google.com/store/apps/details?id=network.planq.castrum',
      btn: 'Wallet',
      description: 'Castrum is an app for private and secure communication.',
      imagePath: './carousel/restake.svg',
    },
    {
      url: 'https://restake.app/planq',
      btn: 'dApps',
      description:
        'REStake automatically imports Cosmos chains from the Chain Registry',
      imagePath: './carousel/castrum.svg',
    },
    {
      url: 'https://explorer.planq.network/',
      btn: 'dApps',
      description: 'Planq Block Explorer',
      imagePath: './carousel/big-dipper.svg',
    },
  ];
  return (
    <Swiper
      className="swiper bg-transparent"
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={30}
      centeredSlides={true}
      onDragStart={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        type: 'bullets',
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Keyboard, Pagination, EffectCoverflow]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="bg-transparent">
          <Link to={slide.url} target="_blank">
            <div className="card w-full bg-[#020121] dark:bg-primary shadow shadow-blue-950 dark:shadow-primary h-80">
              <div className="card-actions justify-center pt-5">
                <Button other="btn-sm bg-transparent border-2 border-blue-500 dark:border-accent">
                  <span className="text-sm font-medium text-blue-500 dark:text-accent">
                    {slide.btn}
                  </span>
                </Button>
              </div>
              <figure className="px-10 pt-10">
                <img src={slide.imagePath} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-white dark:text-neutral">
                  {slide.description}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCarousel;
