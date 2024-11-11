import BirthdayParticlesBackground from '@/components/birthday-particles';
import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const index = () => {
    return (
        <>
            <div id='home' className='w-full h-screen text-center relative'>
                <BirthdayParticlesBackground />
                <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
                    <div className='m-auto pt-[68px] z-[999]'>
                        <ScrollAnimation animateIn='tada' duration={1}>
                            <h1
                                className='relative font-bold text-white text-2xl p-4 duration-200 uppercase'
                                style={{
                                    textShadow:
                                        '0px -3px #ec2225, 0px 3px #00c2cb, -3px 0px #ff00c2, 3px 0px #00c2cb',
                                }}
                            >
                                happy birthday ade cantikkk!!!
                                <br />
                                🥳✨💗
                            </h1>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className=' min-h-screen flex flex-col items-center justify-center p-8'>
                <ScrollAnimation animateIn='flash' animateOnce>
                    <p className='p-4 rounded-lg bg-white/40 flex flex-wrap'>
                        HAIIII!!!!
                        <br />
                        Selamat ulang tahun ke-20, adeee
                        cantikkkk!🥳✨💋💋💗💗💗
                        <br />
                        <br />
                        ndaa kerasa udah dua dekade kamu hadir di dunia, dan aku
                        beruntung banget bisa ada di sisi kamu sekarang. kamuuu
                        kereennn udahh jadiii anak keperawatan lhooo, ituu nda
                        mudahhh dan aku tahu betapa keras kamu berjuang buat
                        sampai sini. dari urusan keluarga kamuu sampai hal hall
                        yang kita lewatin bareng, kamu tetap kuat dan nggak
                        nyerah. akuuu banggaaa bangett samaa kamuuu!!!🤗
                        <br />
                        <br />
                        aku beneran bangga punya kamuuuu, adee. kamu itu ndaa
                        cuma pacar buat aku, tapi partner hidup yang selalu
                        bikin hari hari aku lebih berarti, jadi lebih
                        berwarnaaaa. timaaciii yaaa, udah jadi orang yang penuh
                        kasih dan ngerti banget aku, yang selalu support di
                        saat-saat sulitt akuu, bahkann sampeee ke rumah aku pas
                        aku sakittt😭😭
                        <br />
                        <br />
                        semogaaaa tahun ini kamu makin bahagia, makin kuat, dan
                        selalu dikelilingi orang-orang yang sayang sama kamu,
                        tentunyaaa di jagaa kesehatan nyaaa, pergaulan nyaaa,
                        perjalanannya kamuu, seeemuaaa muanyaaaa. aku selaluuu
                        ada di samping kamu, support dan nemenin kamu di setiap
                        langkah yang kamu ambil. sekali lagi, happy birthday,
                        adee cantikkkk! 🤗🤗🤗💗💗💗
                        <br />
                        <br />
                        I LOVE YOU MORE THAN YOU LOVE MEEE!!!🤗🤗🤗💋💋💋💗💗💗
                        <br />
                        salam sayang, kinoooyyyy
                        <br />
                        <br />
                        <br />
                        <br />
                        ohiyaaa aku ada sesuatuu buat kamuu, cobaa kamu klik dibawah ini yaa cantikk...
                        <Link href='/birthday/flowers' legacyBehavior className='w-full flex justify-center'>
                            <a className='w-fit rounded-lg px-2 py-1 flex text-[10px] font-semibold bg-pink-500 hover:text-artiysx-blu/80 cursor-pointer whitespace-normal'>
                                 klik disiniii!!!
                            </a>
                        </Link>
                    </p>    
                    <p>
                    </p>
                </ScrollAnimation>

            </div>
        </>
    );
};

export default index;
