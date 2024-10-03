import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} style={{ padding: '20px', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home;
