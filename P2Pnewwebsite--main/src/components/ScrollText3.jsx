// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ScrollText3.css';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import mobileIcon from '/assets/mobileIcon.webp';

const ScrollText3 = () => {
  return (
    <>
      <img className="background-video3" src="/assets/space-bg-2.webp"></img>

      <div className="image-container3">
        {/* Top left corner icon */}
        <div className="top-left-mobile-icon">
          <img src={mobileIcon} alt="Mobile Icon" />
        </div>

        {/* Scroll-text image */}
        <img src="/assets/scroll-text3.webp" alt="Scroll-text" className="scroll-text-image3" />

        {/* Bottom right corner icon */}
        <div className="bottom-right-mobile-icon">
          <img src={mobileIcon} alt="Mobile Icon" className="bottom-mobile-icon" />
        </div>

        <div className="custom-scroll-box3">
          <div className="scroll-box-text3">Scroll</div>
          <div className="mouse-icon-div3">
            <MouseOutlinedIcon className="icon3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollText3;

