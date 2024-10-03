// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ScrollText2.css';
import backgroundVideo2 from '/assets/scrollText-bg2.webp';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import vrIcon from '/assets/vr-icon.webp';

const ScrollText2 = () => {
  return (
    <div className="image-container2">
      <img className="background-video2" src={backgroundVideo2} alt="Background Video" />

      <img src="/assets/scroll-text2.webp" alt="Scroll-text" className="scroll-text-image2" />

      {/* Top left corner icon */}
      <div className="vr-1-top-left-icon">
        <img src={vrIcon} alt="VR Icon" />
      </div>

      {/* Scroll-text image */}

      {/* Bottom right corner icon */}
      <div className="vr-2-bottom-right-icon">
        <img src={vrIcon} alt="VR Icon" />
      </div>

      <div className="custom-scroll-box2">
        <div className="scroll-box-text2">Scroll</div>
        <div className="mouse-icon-div2">
          <MouseOutlinedIcon className="icon2" />
        </div>
      </div>
    </div>
  );
};

export default ScrollText2;

