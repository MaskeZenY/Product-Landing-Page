"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FiArrowDown, FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { NextPage } from 'next';
import ProductCard from '../components/ProductCard';

const MShop: NextPage = () => {
  const [isMuted, setIsMuted] = useState(true); // Gérer l'état muet
  const videoRef = useRef<HTMLVideoElement>(null); // Référence à la vidéo

  return (
    <div className="min-h-screen text-gray-100">
      <div className="padingpersoo scroll-smooth shine"></div>
      <div className="padingpersoo scroll-smooth">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col max-w-xl lg:max-w-2xl">
            <label className="text-white text-3xl md:text-5xl font-bold mb-2 fadeInAnimation">SHOP NOW</label>
            <label className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400))] animate-gradient leading-[1.2] pb-6">
              MSPOOF
            </label>
            <label className="font-medium text-white/90 text-lg">
              Unban you from every <span className="font-bold">ban</span> cfx with MSPOOF.
            </label>
            <div className="flex flex-col lg:flex-row mt-4">
              <Link href="#products">
                <button className="bg-sky-500 text-white font-bold py-2 px-4 rounded effecthover">
                  BUY NOW
                </button>
              </Link>
              <button className="text-white font-bold py-2 px-4 rounded mt-4 lg:mt-0 lg:ml-4 bordersky effecthover">
                <a href="https://discord.gg/link" target="_blank">DISCORD</a>
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-[120%] lg:ml-8 flex flex-col justify-center items-center">
            <video
              ref={videoRef}
              src="/1.mkv"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-[70%] h-auto object-cover rounded-lg shadow-xl effecthover"
            />
            <img
              onClick={() => setIsMuted(!isMuted)}
              src={isMuted ? "/mute.svg" : "/unmute.svg"}
              alt={isMuted ? "Unmute" : "Mute"}
              className="effecthover cursor-pointer mt-4 w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center animate-bounce -mt-6 dontshowmobile">
        <FiArrowDown className="w-10 h-10" />
      </div>
      <div className="separatorright  animate-pulse"></div>
      <div className="padingpersoo2 py-16 colorma ">
        <center>
          <label className="text-white text-3xl md:text-5xl font-bold mb-10 block">WHY CHOOSE US</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ">
            <div className="p-6 rounded-lg bordergray effectborderblue effectup ">
              <img src="/flash.svg" alt="Speed" className="mx-auto w-12 h-12 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Get instant access to your purchases with our high-speed system.</p>
            </div>
            <div className="p-6 rounded-lg bordergray effectborderblue effectup">
              <img src="/secure.svg" alt="Security" className="mx-auto w-12 h-12 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Payment</h3>
              <p className="text-gray-400">Your transactions are safe with our encrypted payment system.</p>
            </div>
            <div className="p-6 rounded-lg bordergray effectborderblue effectup">
              <img src="/support.svg" alt="Support" className="mx-auto w-12 h-12 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-400">Our team is here to help you anytime, anywhere, with fast response.</p>
            </div>
          </div>
        </center>
      </div>
      <div className="separatorleft animate-pulse"></div>
      <div className="padingpersoo3">
        <center>
          <label className="text-white text-3xl md:text-5xl font-bold mb-10 block" id='products'>PRODUCTS</label>
          <div className="flex flex-row justify-center items-center gap-8 fadeInAnimation">
            <ProductCard
              title="Free Plan"
              price={0}
              currencySymbol="€"
              features={[
                { name: "Unban your from any ban cfx", available: true },
                { name: "Discord support", available: false },
                { name: "Spoof sharing", available: false },
                { name: "API access", available: false },
                { name: "Fivem account", available: false },
              ]}
              purchaseLink="https://buy.stripe.com/"
            />
            <ProductCard
              title="Premium Plan"
              price={8}
              bestseller={true}
              currencySymbol="€"
              features={[
                { name: "Unban your from any ban cfx", available: true },
                { name: "Discord support", available: true },
                { name: "Spoof sharing", available: true },
                { name: "API access", available: true },
                { name: "Fivem account", available: true },
              ]}
              purchaseLink="https://buy.stripe.com/"
            />
            <ProductCard
              title="Standard Plan"
              price={5}
              currencySymbol="€"
              features={[
                { name: "Unban your from any ban cfx", available: true },
                { name: "Discord support", available: true },
                { name: "Spoof sharing", available: true },
                { name: "API access", available: false },
                { name: "Fivem account", available: false },
              ]}
              purchaseLink="https://buy.stripe.com/"
            />
          </div>
        </center>
      </div>
    </div>
  );
};

export default MShop;
