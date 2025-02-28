import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "../styles/BaristaRecommendsComponent.css";

const BaristaRecommendsComponents = () => {
      return (
      <div className="p-5 bg-[#edebe9] w-100 mt-14 lg:pl-20 lg:pr-20 pb-10 relative">

        <div className="flex justify-between pt-5">
             <span className="text-[#1e3932] font-bold text-2xl">Barista Recommends</span>
             <span className="text-[#00754a] font-semibold text-sm cursor-pointer">View Menu</span>
        </div>
        <div className="absolute -top-2 right-1">
        <svg width="57" height="70" viewBox="0 0 91 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.2496 15.28C52.3845 17.7763 57.2957 23.9676 60.6641 25.3412C65.6847 27.3848 71.8349 28.0999 77.7283 27.9446C72.5889 29.791 67.4349 31.9438 62.4649 34.3773C62.2892 34.4075 62.1135 34.4376 61.9378 34.4677C61.66 34.2756 61.3354 34.1278 60.898 34.0969C52.2362 33.6232 44.4648 27.5742 35.5072 28.4616C31.4392 28.8724 24.0463 33.846 28.5294 37.8971C32.7446 41.7153 40.9371 40.5634 46.2911 40.155C48.6311 39.9765 50.9361 39.6953 53.246 39.3938C41.8979 46.2392 32.3352 54.8358 27.1879 65.2954C24.545 70.6612 25.8032 76.2024 33.6762 73.5496C37.5154 72.2524 39.9873 66.6512 41.5271 63.7385C44.6734 57.7873 46.9729 50.1804 52.0825 45.3003C52.4714 44.938 52.6306 44.5315 52.6331 44.1269C54.6662 42.7911 56.7991 41.5386 58.9681 40.3356C55.8177 43.8871 53.2769 47.8972 51.5171 52.0576C49.3532 57.1851 48.8775 65.399 54.5991 69.0062C59.2175 71.9106 61.6958 63.5705 62.3569 61.3522C64.7914 53.1422 66.5049 44.7828 70.1968 36.8896C70.4458 36.3618 70.4032 35.8952 70.1701 35.5198C70.4563 35.2337 70.6366 34.9379 70.6562 34.6112C74.1487 33.1086 77.6943 31.7336 81.2371 30.518C77.8908 35.5138 75.9048 41.5391 75.5684 47.0611C75.4099 49.5361 78.1738 59.1095 83.2111 56.2519C87.3355 53.9328 86.6358 47.0385 86.64 43.3716C86.6744 39.0389 86.3493 34.7009 86.0193 30.3833C86.4948 29.8138 86.9883 29.2691 87.4858 28.7572C87.966 28.7111 88.3481 28.4755 88.6073 28.1522C92.1702 27.1004 95.6665 26.1743 99.0122 25.4218C101.493 24.8652 100.714 21.3996 98.225 21.9438C94.5968 22.7698 90.8091 23.757 86.9587 24.9028C86.8079 24.8311 86.643 24.7674 86.4782 24.7036C86.115 24.1219 85.4446 23.7156 84.5162 23.8247C80.8768 22.1324 77.0592 20.0859 73.39 18.5158C69.4282 16.8147 61.8073 12.9591 57.2496 15.28ZM65.914 23.2388C63.1078 22.6665 60.344 21.7718 59.496 19.135C58.9366 17.3854 61.8003 18.3633 62.9388 18.6251C68.1401 19.8292 72.8066 22.0925 77.4632 24.3965C73.5544 24.4008 69.5882 23.9996 65.914 23.2388ZM36.6732 36.8957C35.4021 36.8322 31.0399 36.6746 31.4917 34.8211C32.4948 30.7069 38.9203 32.0188 42.0382 32.6938C45.6155 33.4572 49.0988 34.8529 52.6466 35.9838C47.347 36.7119 42.006 37.1655 36.6732 36.8957ZM38.7307 60.7585C37.6093 62.9414 36.4069 65.0128 35.0527 67.0657C34.7826 67.4828 28.8434 72.3631 29.8583 68.8909C30.9269 65.2478 33.8358 61.799 36.1941 58.7347C38.2414 56.0583 40.6823 53.543 43.3699 51.1499C41.7097 54.3592 40.2913 57.7111 38.7307 60.7585ZM56.9269 64.7846C55.7152 67.3873 54.0237 60.27 54.0014 59.1782C53.9197 56.2092 55.1969 53.2886 56.4883 50.6052C58.3444 46.7406 61.2161 43.0501 64.6216 39.9316C62.8121 44.2957 61.2836 48.9378 60.2758 53.3176C59.3922 57.1883 58.6365 61.1263 56.9269 64.7846ZM82.354 49.6577C82.2435 50.7026 81.205 52.8909 82.0319 53.0501C79.4044 52.5336 79.5371 47.8466 79.6339 46.266C79.8194 43.0392 80.8831 39.4164 82.5092 36.0512C82.7846 40.5928 82.8663 45.1398 82.354 49.6577Z" fill="#B7CBD4"/>
<path d="M80.8492 90.5475L76.6929 91.5454C72.4525 92.5692 69.2323 95.7523 68.4367 99.7097L67.7065 103.332L66.9764 99.7011C66.1807 95.7437 62.9606 92.5606 58.7295 91.5368L54.5732 90.5389L58.7295 89.5581C62.9699 88.5602 66.1994 85.4114 67.0232 81.4627L67.6972 78.2451L68.3711 81.4627C69.1949 85.4114 72.4338 88.5688 76.6742 89.5667L80.8492 90.5475Z" fill="#B7CBD4"/>
<path d="M14.1486 35.1022L11.9106 35.6725C9.62727 36.2575 7.89335 38.0764 7.46492 40.3378L7.07176 42.4074L6.67861 40.3329C6.25017 38.0715 4.51625 36.2526 2.23796 35.6676L0 35.0973L2.23796 34.5369C4.52129 33.9666 6.26025 32.1673 6.70381 29.9109L7.06672 28.0723L7.42963 29.9109C7.87319 32.1673 9.61719 33.9715 11.9005 34.5418L14.1486 35.1022Z" fill="#B7CBD4"/>
</svg>
        </div>
        <div className="mt-10 relative">
            <div className="swiper-button image-swiper-button-prev absolute">
                <img src="https://www.starbucks.in/media/swiperbtnleft-ELPH6PUN.svg"
                alt="prev"
                />
                </div>
                <div className="swiper-button image-swiper-button-next absolute">
                    <img src="https://www.starbucks.in/media/swiperbtnright-ZPA5GCMU.svg"
                    alt="next"
                    />
                </div>
            </div>
        <Swiper
      modules={[Navigation]}
      navigation={{
            nextEl:".image-swiper-button-next",
            prevEl:".image-swiper-button-prev",
            disabledClass:"swiper-button-disable",     
      }}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
       
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      mousewheel={(true)}
      breakpoints={{
        320:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480:{
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 30,
        },
        730:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1050:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1280:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className="w-30 h-auto bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                   <div className="grid grid-cols-[1fr_3fr]">
                    <div> 
                        <img src="https://www.starbucks.in/assets/icon/placeholder.webp"
                        alt="Cappuccino"
                        className="rounded-lg h-20 object-cover"
                        width={80}

                        ></img>
                    </div>
                    <div className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
<circle cx="8" cy="8" r="4" fill="#00754A"/>
</svg>
            <p className="font-semibold">Cappuccino</p>
            <p className="text-xs text-[#6c757d]">SHORT()</p>
                    </div>
                     </div>
                   <div className="mt-3 flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-sm">₹ 283
                            <span className="text-xs">.50</span></span>
                    </div>
                    <div>
                         <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">Add Item</button>
                    </div>
                   </div>

        </div></SwiperSlide>
      <SwiperSlide><div className="w-30 h-auto bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                   <div className="grid grid-cols-[1fr_3fr]">
                    <div> 
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp"
                        alt="Signature Hot Choclate"
                        className="rounded-lg h-20 object-cover"
                        width={80}

                        ></img>
                    </div>
                    <div className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
<circle cx="8" cy="8" r="4" fill="#00754A"/>
</svg>
            <p className="font-semibold">Signature Hot Choclate</p>
            <p className="text-xs text-[#6c757d]">SHORT(235ml)284Kcal</p>
                    </div>
                     </div>
                   <div className="mt-3 flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-sm">₹ 309
                            <span className="text-xs">.75</span></span>
                    </div>
                    <div>
                         <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">Add Item</button>
                    </div>
                   </div> 
                   </div></SwiperSlide>
      <SwiperSlide><div className="w-30 h-auto bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                   <div className="grid grid-cols-[1fr_3fr]">
                    <div> 
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112573.webp"
                        alt="Vanilla Milkshake"
                        className="rounded-lg h-20 object-cover"
                        width={80}

                        ></img>
                    </div>
                    <div className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
<circle cx="8" cy="8" r="4" fill="#00754A"/>
</svg>
            <p className="font-semibold">Vanilla Milkshake</p>
            <p className="text-xs text-[#6c757d]">TALL(354ml)</p>
                    </div>
                     </div>
                   <div className="mt-3 flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-sm">₹ 378
                            <span className="text-xs">.00</span></span>
                    </div>
                    <div>
                         <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">Add Item</button>
                    </div>
                   </div>
                   </div></SwiperSlide>
      <SwiperSlide><div className="w-30 h-auto bg-white rounded-lg shadow-sm p-4 cursor-pointer">
                   <div className="grid grid-cols-[1fr_3fr]">
                    <div> 
                        <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104997.webp"
                        alt="Cold Brew Black"
                        className="rounded-lg h-20 object-cover"
                        width={80}

                        ></img>
                    </div>
                    <div className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#00754A"/>
<circle cx="8" cy="8" r="4" fill="#00754A"/>
</svg>
            <p className="font-semibold">Cold Brew Black</p>
            <p className="text-xs text-[#6c757d]">SHORT(Short Cold Brew Black)</p>
                    </div>
                     </div>
                   <div className="mt-3 flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-sm">₹ 299
                            <span className="text-xs">.25</span></span>
                    </div>
                    <div>
                         <button className="border-2 p-2 w-32 rounded-3xl text-white bg-[#00754a]">Add Item</button>
                    </div>
                   </div>
                   </div></SwiperSlide>
    </Swiper>
        </div>
      );  
};

export default BaristaRecommendsComponents;