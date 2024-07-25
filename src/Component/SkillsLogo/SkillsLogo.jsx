
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function SkillsLogo() {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-6xl mx-auto py-20 '>
                {/* <h2 className="text-center text-3xl font-semibold mb-10">My Skills</h2> */}
                <Swiper

                    slidesPerView={6}
                    spaceBetween={20}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#d8121253]  border-[#FA480B] '>
                            <FaHtml5 className='text-6xl text-[#fa330b]' />
                            <h2 className='text-[22px] font-medium'>Html</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#12bed853]    border-cyan-800'>
                            <IoLogoCss3 className='text-6xl text-cyan-600' />
                            <h2 className='text-[22px] font-medium'>Css</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#fff710b0]    border-yellow-600'>
                            <SiJavascript className='text-6xl text-[#FFFF00] bg-black' />
                            <h2 className='text-[22px] font-medium'>Javascript</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#12bed853]    border-cyan-800'>
                            <SiTailwindcss className='text-6xl text-cyan-600' />
                            <h2 className='text-[22px] font-medium'>Tailwind</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#12bed853]    border-cyan-800'>
                            <IoLogoReact className='text-6xl text-cyan-600' />
                            <h2 className='text-[22px] font-medium'>React</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#d8ce124b]  bg-opacity-55  border-[#f6fa0b]'>
                            <SiFirebase className='text-6xl text-[#faba0b]' />
                            <h2 className='text-[22px] font-medium'>Firebase</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-5 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#33d81253]  bg-opacity-55  border-[#33fa0b]'>
                            <DiNodejs className='text-7xl text-[#0ffa0b]' />
                            <h2 className='text-[22px] font-medium'>Node js</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-2 text-center bg-black text-white py-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-t from-[#12d84a53]  bg-opacity-55  border-[#0bfa37]'>
                            <SiMongodb className='text-6xl text-[#0bfa43]' />
                            <h2 className='text-[22px] font-medium'>Mongodb</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
