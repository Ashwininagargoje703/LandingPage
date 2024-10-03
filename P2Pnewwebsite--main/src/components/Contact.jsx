import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


const TextAnimations = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Scramble text animation
    tl.to(textRef.current, {
      duration: 2,
      text: {
        value: 'Peer2Play',
        scrambleText: {
          chars: '0123456789',
          speed: 0.3,
        },
      },
      ease: 'power2.inOut',
    });

    // Fade in and scale animation
    tl.to(textRef.current, {
      duration: 2,
      opacity: 1,
      scale: 1.5,
      ease: 'power2.inOut',
    });

    // Slide in from left
    tl.to(textRef.current, {
      duration: 2,
      x: 0,
      opacity: 1,
      ease: 'power2.inOut',
    });

    // Rotate animation
    tl.to(textRef.current, {
      duration: 2,
      rotation: 360,
      ease: 'power2.inOut',
    });

    // Return to original state
    tl.to(textRef.current, {
      duration: 2,
      scale: 1,
      x: 0,
      rotation: 0,
      ease: 'power2.inOut',
    });

  }, []);

  return (
    <div className="text-container">
      <h1 ref={textRef} className="animated-text font-sans font-semibold text-6xl h-64">Peer2Play</h1>
    </div>
  );
};

export default TextAnimations;
