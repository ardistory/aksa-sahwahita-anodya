import { Head } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import Image1 from '@/Assets/img/Paint_Drip_Wallpaper_Final2.png';
import Image2 from '@/Assets/img/pattern.png';
import Image3 from '@/Assets/img/berserk-guts-griffith.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { Button, Dropdown, Space, Typography } from 'antd';
import LandingPageLayout from '@/Layouts/LandingPageLayout';
import Logo from '@/Assets/img/logo.png';

export default function LandingPage({ auth }) {
    const items = [
        {
            key: '1',
            label: 'Category 1',
        },
        {
            key: '2',
            label: 'Category 2',
        },
        {
            key: '3',
            label: 'Category 3',
        },
    ];

    return (
        <>
            <Head title={'Home'}>
                <link rel="shortcut icon" href={Logo} type="image/x-icon" />
            </Head>

            <LandingPageLayout user={auth.user}>
                <Swiper style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }} modules={[Autoplay, Navigation, EffectFade]} effect={'fade'} navigation={true} loop={true} autoplay={{ delay: 5000 }} spaceBetween={50} slidesPerView={1}>
                    <SwiperSlide>
                        <img src={Image1} className={'w-full h-[400px] object-cover'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Image2} className={'w-full h-[400px] object-cover'} />
                    </SwiperSlide>
                </Swiper>

                <div className={'flex items-center justify-between px-14 py-2'}>
                    <div className={'font-bold text-lg'}>
                        News Trending
                    </div>
                    <Button className={'bg-gray-400 text-white rounded-xl'} variant={'solid'} color={'primary'} iconPosition={'end'} icon={<CaretRight />}>
                        More
                    </Button>
                </div>

                <div className={'bg-gray-200 px-14 py-5 grid grid-cols-1 md:grid-cols-3 gap-5'}>
                    <div className={'bg-white'}>
                        <div className={'bg-red-500'}>
                            <img src={Image1} className={'w-full h-[250px] object-cover'} />
                        </div>
                        <div className={'p-5 text-xs'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum.
                        </div>
                    </div>
                    <div className={'bg-white'}>
                        <div>
                            <img src={Image1} className={'w-full h-[250px] object-cover'} />
                        </div>
                        <div className={'p-5 text-xs'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum.
                        </div>
                    </div>
                    <div className={'bg-white'}>
                        <div>
                            <img src={Image2} className={'w-full h-[250px] object-cover'} />
                        </div>
                        <div className={'p-5 text-xs'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum.
                        </div>
                    </div>
                </div>

                <div className={'flex items-center justify-between px-14 py-2'}>
                    <Dropdown menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                    }} placement="bottom" arrow>
                        <Typography.Link>
                            <Space className={'text-black font-semibold text-lg'}>
                                Book Category
                                <CaretDown />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                    <Button className={'bg-gray-400 text-white rounded-xl'} variant={'solid'} color={'primary'} iconPosition={'end'} icon={<CaretRight />}>
                        More
                    </Button>
                </div>

                <div className={'py-2 grid grid-cols-3 gap-5 border-b-2 border-gray-500 mx-14'}>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={'space-y-5'}>
                        <img src={Image3} className={'rounded-2xl'} />
                        <p className={'text-center'}>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className={'mt-4 mb-10'}>
                    <p className={'font-bold text-3xl text-center mb-4'}>Jurnal</p>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        className={'mx-5 md:mx-32'}
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000 }}
                    >
                        <SwiperSlide className={'bg-blue-500 rounded-xl p-5'}>
                            <p className={'text-white text-xl md:text-4xl font-semibold'}>Jurnal Pengabdian Kepada Masyarakat1</p>
                            <button className={'bg-lime-400 px-2 rounded-xl text-xs font-semibold'}>
                                Kunjungi
                            </button>
                        </SwiperSlide>
                        <SwiperSlide className={'bg-blue-500 rounded-xl p-5'}>
                            <p className={'text-white text-xl md:text-4xl font-semibold'}>Jurnal Pengabdian Kepada Masyarakat2</p>
                            <button className={'bg-lime-400 px-2 rounded-xl text-xs font-semibold'}>
                                Kunjungi
                            </button>
                        </SwiperSlide>
                        <SwiperSlide className={'bg-blue-500 rounded-xl p-5'}>
                            <p className={'text-white text-xl md:text-4xl font-semibold'}>Jurnal Pengabdian Kepada Masyarakat3</p>
                            <button className={'bg-lime-400 px-2 rounded-xl text-xs font-semibold'}>
                                Kunjungi
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </LandingPageLayout>
        </>
    );
}