import React from 'react';

const Crickverse = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-[600px] h-[400px]">
        <svg
          viewBox="0 0 600 400"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00ffff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M 40 0 H 560 Q 600 0 600 40 V 360 Q 600 400 560 400 H 60 Q 0 400 0 360 V 100 Q 0 60 40 60 Z"
            fill="url(#gradient)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <p className="text-lg">
            This Crickverse game is a half a billion dollar market with global impact: video games, cricket, sports. Where players can play around in Blockchain NFT, Metaverse technologies, which is another multi-billion dollar industry.
          </p>
          <div className="self-end w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center text-white text-2xl cursor-pointer">
            &#x21E3;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crickverse;
