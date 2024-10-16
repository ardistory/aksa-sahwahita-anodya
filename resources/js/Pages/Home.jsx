import { Head } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import imageOne from '../Assets/img/berserk-hd.jpg';
import imageTwo from '../Assets/img/Eclipse.png';
import 'swiper/css';

export default function Home() {
    return (
        <>
            <Head title={'Home'} />

            <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 3000 }} spaceBetween={50} slidesPerView={1}>
                <SwiperSlide>
                    <img src={imageOne} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imageTwo} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}