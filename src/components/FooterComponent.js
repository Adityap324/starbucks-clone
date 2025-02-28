import React from "react";


const FooterComponent = () => {
      return <div className="p-5 lg:pl-20 lg:pr-20 bg-[#0e382c] w-full"> 
              <div className="flex justify-between flex-wrap">
                <div className="mt-2 cursor-pointer">
                    <img src={require("../images/logo.png")}></img>
                </div>
                <div className="text-white mt-2 cursor-pointer">
                <p className="mt-2 font-semibold text-xl">About Us</p>
                 <p className="font-thin">Our Heritage</p>
                 <p className="font-thin">Coffeehouse</p>
                 <p className="font-thin">Our Company</p>
                </div>
                <div className="text-white mt-2 cursor-pointer">
                <p className="mt-2 font-semibold text-xl" >Responsibility</p>
                <p className="font-thin">Diversity</p>
                <p className="font-thin">Community</p>
                <p className="font-thin">Ethical Sourcing</p>
                <p className="font-thin">Environmental Stewardship</p>
                <p className="font-thin">Learn More</p>
                </div>
                <div className="text-white mt-2 cursor-pointer" >
                <p className="mt-2 font-semibold text-xl">Quick Links</p>
                <p className="font-thin">Privacy Policy</p>
                <p className="font-thin">FAQs</p>
                <p className="font-thin" >Starbucks India Mobile App Terms of Use</p>
                <p className="font-thin" >Customer Service</p>
                <p className="font-thin">Delivery</p>
                <p className="font-thin" >Season's Gifting</p>
                <p className="font-thin">Loyalty Program Terms and Conditions</p>
                <p className="font-thin" >Starbucks Rewards Day Offer</p>
                <p className="font-thin" >Diwali Bonus Star Offer</p>
                <p className="font-thin">Classics Combo Offer</p>
                <p className="font-thin" >Beverage Subscription</p>
                </div>
                <div className="text-white mt-2 cursor-pointer">
                    <p className="mt-2 font-semibold text-xl">SOCIAL MIDEA</p>
                    <div className="mt-2 flex justify-between">
                    <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.741 4 12.3323 4.01381 11.0524 4.07221C9.77516 4.13047 8.90283 4.33334 8.13954 4.63001C7.35044 4.93663 6.68123 5.34695 6.01406 6.01406C5.34695 6.68123 4.93663 7.35044 4.63001 8.13954C4.33334 8.90283 4.13047 9.77516 4.07221 11.0524C4.01381 12.3323 4 12.741 4 16C4 19.259 4.01381 19.6677 4.07221 20.9476C4.13047 22.2248 4.33334 23.0972 4.63001 23.8605C4.93663 24.6496 5.34695 25.3188 6.01406 25.9859C6.68123 26.6531 7.35044 27.0634 8.13954 27.37C8.90283 27.6667 9.77516 27.8695 11.0524 27.9278C12.3323 27.9862 12.741 28 16 28C19.259 28 19.6677 27.9862 20.9476 27.9278C22.2248 27.8695 23.0972 27.6667 23.8605 27.37C24.6496 27.0634 25.3188 26.6531 25.9859 25.9859C26.6531 25.3188 27.0634 24.6496 27.37 23.8605C27.6667 23.0972 27.8695 22.2248 27.9278 20.9476C27.9862 19.6677 28 19.259 28 16C28 12.741 27.9862 12.3323 27.9278 11.0524C27.8695 9.77516 27.6667 8.90283 27.37 8.13954C27.0634 7.35044 26.6531 6.68123 25.9859 6.01406C25.3188 5.34695 24.6496 4.93663 23.8605 4.63001C23.0972 4.33334 22.2248 4.13047 20.9476 4.07221C19.6677 4.01381 19.259 4 16 4ZM16.001 6.16113C19.2051 6.16113 19.5846 6.17337 20.85 6.23111C22.0199 6.28446 22.6553 6.47995 23.0782 6.64428C23.6383 6.86197 24.0381 7.12201 24.458 7.54195C24.8779 7.96184 25.1379 8.36159 25.3556 8.92172C25.52 9.34457 25.7154 9.97996 25.7688 11.1499C25.8265 12.4153 25.8388 12.7948 25.8388 15.999C25.8388 19.2031 25.8265 19.5827 25.7688 20.848C25.7154 22.018 25.52 22.6534 25.3556 23.0762C25.1379 23.6364 24.8779 24.0361 24.458 24.456C24.0381 24.8759 23.6383 25.136 23.0782 25.3537C22.6553 25.518 22.0199 25.7135 20.85 25.7668C19.5848 25.8246 19.2053 25.8368 16.001 25.8368C12.7966 25.8368 12.4171 25.8246 11.1519 25.7668C9.98191 25.7135 9.34652 25.518 8.92367 25.3537C8.36354 25.136 7.9638 24.8759 7.5439 24.456C7.12401 24.0361 6.86393 23.6364 6.64624 23.0762C6.4819 22.6534 6.28641 22.018 6.23306 20.848C6.17533 19.5827 6.16309 19.2031 6.16309 15.999C6.16309 12.7948 6.17533 12.4153 6.23306 11.1499C6.28641 9.97996 6.4819 9.34457 6.64624 8.92172C6.86393 8.36159 7.12396 7.96184 7.5439 7.54195C7.9638 7.12201 8.36354 6.86197 8.92367 6.64428C9.34652 6.47995 9.98191 6.28446 11.1519 6.23111C12.4172 6.17337 12.7968 6.16113 16.001 6.16113ZM9.83691 16.001C9.83691 12.5977 12.5958 9.83887 15.9991 9.83887C19.4024 9.83887 22.1612 12.5977 22.1612 16.001C22.1612 19.4043 19.4024 22.1632 15.9991 22.1632C12.5958 22.1632 9.83691 19.4043 9.83691 16.001ZM16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20ZM22.4058 11.0333C23.2011 11.0333 23.8458 10.3886 23.8458 9.59335C23.8458 8.79805 23.2011 8.15332 22.4058 8.15332C21.6105 8.15332 20.9658 8.79805 20.9658 9.59335C20.9658 10.3886 21.6105 11.0333 22.4058 11.0333Z" fill="white"/>
</svg>
                    </span>
                    <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3663 12.0004H18.6663V9.33374C18.6663 7.95774 18.7783 7.09107 20.7503 7.09107H23.241V2.85108C22.029 2.72574 20.8103 2.66441 19.5903 2.66708C15.973 2.66708 13.333 4.87641 13.333 8.93241V12.0004H9.33301V17.3337L13.333 17.3324V29.3337H18.6663V17.3297L22.7543 17.3284L23.3663 12.0004Z" fill="white"/>
</svg>
                    </span>
                    <span> 
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8451 5.37445C27.7584 5.88779 25.9091 6.85045 24.9798 7.03445C24.9438 7.04379 24.9144 7.05579 24.8798 7.06512C23.7958 5.99579 22.3104 5.33312 20.6664 5.33312C17.3531 5.33312 14.6664 8.01979 14.6664 11.3331C14.6664 11.5078 14.6518 11.8291 14.6664 11.9998C10.3758 11.9998 7.24245 9.76112 4.89711 6.88379C4.58378 6.49712 4.25045 6.69845 4.18111 6.97312C4.02511 7.59445 3.97178 8.63312 3.97178 9.37445C3.97178 11.2425 5.43178 13.0771 7.70511 14.2145C7.28645 14.3225 6.82511 14.3998 6.34511 14.3998C5.77978 14.3998 5.12911 14.2518 4.55978 13.9531C4.34911 13.8425 3.89445 13.8731 4.02911 14.4118C4.56911 16.5705 7.03311 18.0865 9.23445 18.5278C8.73445 18.8225 7.66778 18.7625 7.17711 18.7625C6.99578 18.7625 6.36511 18.7198 5.95711 18.6691C5.58511 18.6238 5.01311 18.7198 5.49178 19.4451C6.51978 21.0011 8.84511 21.9785 10.8464 22.0158C9.00378 23.4611 5.99045 23.9891 3.10378 23.9891C2.51978 23.9758 2.54912 24.6411 3.01978 24.8878C5.14911 26.0051 8.63711 26.6665 11.1291 26.6665C21.0358 26.6665 26.6664 19.1158 26.6664 11.9985C26.6664 11.8838 26.6638 11.6438 26.6598 11.4025C26.6598 11.3785 26.6664 11.3558 26.6664 11.3318C26.6664 11.2958 26.6558 11.2611 26.6558 11.2251C26.6518 11.0438 26.6478 10.8745 26.6438 10.7865C27.4291 10.2198 28.6318 9.23579 29.2398 8.48245C29.4464 8.22645 29.2798 7.91579 28.9984 8.01312C28.2744 8.26512 27.0224 8.75312 26.2384 8.84645C27.8078 7.80779 28.5838 6.90379 29.2504 5.89979C29.4784 5.55712 29.1931 5.20912 28.8451 5.37445Z" fill="white"/>
</svg>

                    </span>
                    </div>
                    
                </div>
                <div className="mt-2">
                        <p className="mt-2 cursor-pointer">
                            <img src="	https://www.starbucks.in/assets/images/appstoreiOS.png"
                            alt="ios store">
                            </img>
                            </p>
                        <p>
                        <p className="mt-2 cursor-pointer">
                            <img src="https://www.starbucks.in/assets/images/appstoreAndroid.png"
                            alt="play store">
                            </img>
                            </p>
                        </p>
                    </div>
                </div>

                <hr className="mt-16"/>
                <div className="text-white text-sm mt-3 mb-6 font-thin flex justify-between">
                    <div>
                        <span>
                            Web Accessiblity<span className="text-xl ml-2 mr-2">&#124;</span>
                        </span>
                        <span>
                            Privacy Statement<span className="text-xl ml-2 mr-2">&#124;</span>
                        </span>
                        <span>
                            Terms of Use<span className="text-xl ml-2 mr-2">&#124;</span>
                        </span>
                        <span>
                            Contact Us<span className="text-xl ml-2 mr-2">&#124;</span>
                        </span>
                    </div>
                    <div className="text-xs"> 
                        <span>© 2024 Starbucks Coffee Company. All rights reserved.</span>
                    </div>
                </div>
              </div>
}

export default FooterComponent;