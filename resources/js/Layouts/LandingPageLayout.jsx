import { Link } from '@inertiajs/react';
import { CaretDown, IdentificationCard, MagnifyingGlass, SignOut, User } from '@phosphor-icons/react';
import { Dropdown, Space, Typography } from 'antd';
import Logo from '@/Assets/img/logo.png';

export default function LandingPageLayout({ children, user }) {
    const items = [
        {
            key: '1',
            label: (
                <Link href={route('login')}>
                    Login
                </Link>
            ),
            icon: <User />,
            disabled: user
        },
        {
            key: '2',
            label: (
                <Link href={route('register')}>
                    Register
                </Link>
            ),
            icon: <IdentificationCard />,
            disabled: user
        },
        {
            key: '3',
            label: (
                <Link method={'post'} href={route('logout')}>
                    Logout
                </Link>
            ),
            icon: <SignOut />,
            disabled: !user
        },
    ];

    return (
        <>
            <div className={'flex justify-between items-center py-4 px-10 bg-cyan-500'}>
                <div className={'flex gap-5 items-center'}>
                    <div className={'bg-white w-14 h-14 rounded-full flex items-center justify-center'}>
                        <img src={Logo} alt="Aksa Sahwahita Anodya" />
                    </div>
                    <a href={'#'} className={'font-semibold text-xl'}>
                        PROFILE
                    </a>
                    <a href={'#'} className={'font-semibold text-xl'}>
                        KONTAK
                    </a>
                </div>
                {user ? (
                    <Dropdown menu={{ items }} placement="topRight" arrow>
                        <Typography.Link>
                            <Space className={'text-black font-semibold text-lg'}>
                                {user.name}
                                <CaretDown />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                ) : (
                    <Dropdown menu={{ items }} placement="topRight" arrow>
                        <Typography.Link>
                            <Space className={'text-black font-semibold text-lg'}>
                                LOGIN
                                <CaretDown />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                )}
            </div>
            <div className={'text-white relative flex justify-center gap-2 items-center py-2 px-2 border-b'}>
                <button className={'bg-black rounded-3xl px-3 py-1 w-auto md:w-24'}>
                    Opini
                </button>
                <button className={'bg-black rounded-3xl px-3 py-1 w-auto md:w-24'}>
                    FWI
                </button>
                <button className={'bg-black rounded-3xl px-3 py-1 w-auto md:w-24'}>
                    All Issue
                </button>
                <button className={'bg-black rounded-3xl px-3 py-1 w-auto md:w-24'}>
                    E-Book
                </button>
                <button className={'bg-black rounded-3xl px-3 py-1 w-auto md:w-24'}>
                    Jurnal
                </button>
                <button className={'md:absolute md:right-40 text-black'}>
                    <MagnifyingGlass size={25} />
                </button>
            </div>
            <main>
                {children}
            </main>
            <footer className={'w-full h-auto md:h-[240px] bg-cyan-500 px-10 py-5 flex flex-col md:flex-row gap-5'}>
                <div className={'max-w-full md:max-w-80'}>
                    <p className={'text-4xl font-bold'}>Contact Information</p>
                    <p>How to get in touch with us.</p>
                </div>
                <div>
                    <div>
                        <p className={'font-semibold text-xl'}>Phone Number</p>
                        <p>081381440063</p>
                    </div>
                    <div>
                        <p className={'font-semibold text-xl'}>Email Address</p>
                        <p>sahwahitafoundation@gmail.com</p>
                    </div>
                </div>
                <div className={'max-w-full md:max-w-72'}>
                    <p className={'font-semibold text-xl'}>Mailing Address</p>
                    <p>Jl. Siliwangi No. 15F Pondok Benda Rt 01 Rw 02 Pamulang - Tangerang Selatan 1541</p>
                </div>
                <div className={'flex gap-5 justify-center items-start'}>
                    <div className={'bg-red-500 w-10 h-10 p-4 flex items-center justify-center rounded-lg'}>
                        logo
                    </div>
                    <div className={'bg-blue-500 w-10 h-10 p-4 flex items-center justify-center rounded-lg'}>
                        logo
                    </div>
                    <div className={'bg-black text-white w-10 h-10 p-4 flex items-center justify-center rounded-lg'}>
                        logo
                    </div>
                </div>
            </footer>
        </>
    );
}
