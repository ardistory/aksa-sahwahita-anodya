import PrimaryButton from '@/Components/PrimaryButton';
import { CaretDown, MagnifyingGlass } from '@phosphor-icons/react';

export default function Guest({ children }) {
    return (
        <>
            <div className={'flex justify-between items-center py-4 px-10 bg-sky-300'}>
                <div className={'flex gap-5 items-center'}>
                    <div className={'bg-white w-14 h-14 rounded-full flex items-center justify-center'}>
                        <span className={'text-xs'}>Logo</span>
                    </div>
                    <a href={'#'}>
                        PROFILE
                    </a>
                    <a href={'#'}>
                        KONTAK
                    </a>
                </div>
                <a href={'#'} className={'flex items-center'}>
                    LOGIN
                    <CaretDown />
                </a>
            </div>
            <div className={'relative flex justify-center gap-2 items-center py-2 border-b'}>
                <PrimaryButton className={'bg-black rounded-3xl'}>
                    Opini
                </PrimaryButton>
                <PrimaryButton className={'bg-black rounded-3xl'}>
                    FWI
                </PrimaryButton>
                <PrimaryButton className={'bg-black rounded-3xl'}>
                    All Issue
                </PrimaryButton>
                <PrimaryButton className={'bg-black rounded-3xl'}>
                    E-Book
                </PrimaryButton>
                <PrimaryButton className={'bg-black rounded-3xl'}>
                    Jurnal
                </PrimaryButton>
                <div className={'md:absolute md:right-40'}>
                    <MagnifyingGlass size={25} />
                </div>
            </div>
            <main>
                {children}
            </main>
        </>
    );
}
