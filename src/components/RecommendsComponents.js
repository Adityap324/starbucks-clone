import React from "react";


const RecommendsComponent = () => {
    return (
     <div className="pl-20 pr-20">
        <div>
             <span className="text-[#1e3932] font-bold text-2xl">Handcrafted Curations</span>
        </div>
        <div className="mt-5 flex justify-between flex-wrap">
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="https://www.starbucks.in/assets/icon/Bestseller.webp" 
            alt="Best seller">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Bestseller</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="https://www.starbucks.in/assets/icon/Drinks.webp" 
            alt="Drinks">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Drinks</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="https://www.starbucks.in/assets/icon/Food.webp" 
            alt="Food">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Food</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="	https://www.starbucks.in/assets/icon/Merchandise.webp
" 
            alt="Merchandise">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Merchandise</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="https://www.starbucks.in/assets/icon/CoffeeAtHome.webp" 
            alt="Coffee At Home">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Coffee At Home</span>
        </div>
        <div className="w-28 text-center">
            <img className="rounded-full cursor-pointer mb-2 hover:border-[#00754a] hover:border-2"
             src="https://www.starbucks.in/assets/icon/ReadyToEat.webp" 
            alt="Ready to eat">

            </img>
            <span className="text-[#212529] text-sm font-semibold">Ready To Eat</span>
        </div>
        </div>
    </div>
    );

};

export default RecommendsComponent