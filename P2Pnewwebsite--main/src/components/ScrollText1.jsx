// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './ScrollText1.css';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';

const ScrollText1 = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollPos(pos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate horizontal scroll effect
  const horizontalScroll = scrollPos / 2; // Adjust the divisor for desired speed

  return (
    <div className="image-container">
      <img className="background-video" src="/assets/space-bg-2.webp"></img>
      <img src="/assets/scroll-text1.webp" alt="Scroll-text" className="scroll-text-image" />
      <div className="custom-scroll-box">
        <div className="scroll-box-text">Scroll</div>
        <div className="mouse-icon-div">
          <MouseOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ScrollText1;

