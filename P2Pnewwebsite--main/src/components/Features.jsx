// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Features.css';
import '../../public/font/gellix.css';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import wavierIconVideo from '/assets/wavier-icon.mp4';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import ScrollText1 from './ScrollText1';
import ScrollText2 from './ScrollText2';
import ScrollText3 from './ScrollText3';
import ScrollText4 from './ScrollText4';
import CustomEase from 'gsap/CustomEase';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const Features = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [moveLeft, setMoveLeft] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [scrollMoveRight, setScrollMoveRight] = useState(false);

  const mobileView =
    window.innerWidth <= 600 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  const [isMobileView, setIsMobileView] = useState(mobileView);
  const [videoDescriptions] = useState([
    'MULTIPLAYER GAMING PLATFORM',
    'SOCIAL HUBS',
    'USER GENERATED CONTENT',
    'INFLUENCER OR USER MANAGED TOURNAMENTS',
  ]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleVideoSelect = (index) => {
    setSelectedIndex(index);
    setTimeout(() => {
      setMoveLeft(true);
      setScrollMoveRight(true);
      setTimeout(() => {
        setShowCard(true);
      }, 1000);
    }, 1000);
  };

  const handleBackButtonClick = () => {
    setMoveLeft(false);
    setScrollMoveRight(false);
    setShowCard(false);
    setTimeout(() => {
      setSelectedIndex(null);
    }, 500);
  };

  const webPositions = [
    { position: 'top-[-37%] left-[25%]', size: 'w-[90px] h-[90px]' },
    { position: 'top-[-37%] right-[-65%]', size: 'w-[75px] h-[75px]' },
    { position: 'bottom-[-36%] left-[16%]', size: 'w-[61px] h-[61px]' },
    { position: 'bottom-[-36%] right-[-58%]', size: 'w-[80px] h-[80px]' },
  ];
  const mobilePositions = [
    {
      position: 'top-[28px] left-[-2rem]',
      size: 'w-[75px] h-[75px]',
      className: 'custom-option-1',
    },
    {
      position: 'top-[110px] right-[-10rem]',
      size: 'w-[48px] h-[48px]',
      className: 'custom-option-2',
    },
    {
      position: 'bottom-[-13rem] left-[-9.5rem]',
      size: 'w-[75px] h-[75px]',
      className: 'custom-option-3',
    },
    {
      position: 'bottom-[-17rem] right-[-2rem]',
      size: 'w-[48px] h-[49px]',
      className: 'custom-option-4',
    },
  ];
  const positionsToShow = isMobileView ? mobilePositions : webPositions;

  const onPageLoad = () => {
    let tl = gsap.timeline({ defaults: { duration: 1, delay: 0 } });

    let relativeTop = window.innerHeight + 100;

    let enableMarkers = false;
    let endScroll = '+=' + (window.innerHeight - 200) + 'px';
    let relativeTopScroll = 1000;
    let scrubVal = 1;

    if (isMobileView) {
      relativeTopScroll = window.innerHeight + 200;
      relativeTopScroll = 650;
    }

    tl.fromTo(
      '.UGC-container',
      {
        opacity: 1,
        display: 'block',
        zIndex: 15,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Hide Main Container',
        },
        opacity: 0,
        display: 'none',
        zIndex: 0,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.DCL-container',
      {
        opacity: 0,
        zIndex: 0,
        y: 700,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show DCL Container',
          ease: 'none',
        },
        opacity: 1,
        zIndex: 15,
        y: 0,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.DCL-container',
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Hide DCL Container',
          ease: 'none',
        },
        opacity: 0,
        zIndex: 0,
        y: -700,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.slides-container',
      {
        opacity: 0,
        display: 'none',
        zIndex: 0,
        y: 700,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show slides Container',
          ease: 'expoScale(0.5,7,none)',
        },
        opacity: 1,
        display: 'block',
        zIndex: 15,
        y: 0,
      }
    );

    tl.fromTo(
      '.scroll-div1',
      {
        opacity: 0,
        display: 'none',
        zIndex: 0,
        y: 700,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show slide 1 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        opacity: 1,
        display: 'block',
        zIndex: 15,
        y: 0,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.image-container',
      {
        width: '75%',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Shrink slide 1 Container',
          ease: 'expoScale(0.5,7,none)',
        },
        width: '30%',
      }
    );

    tl.fromTo(
      '.scroll-div2',
      {
        opacity: 0,
        display: 'none',
        zIndex: 15,
        y: 3000,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show slide 2 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        opacity: 1,
        display: 'block',
        zIndex: 20,
        y: 0,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.image-container2',
      {
        width: '75%',
        top: '30vh',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'shrink slide 2 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        width: '30%',
        top: '0vh',
      }
    );

    tl.fromTo(
      '.vr-2-bottom-right-icon img, .vr-1-top-left-icon img',
      {
        width: '200px',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'shrink slide 2 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        width: '100px',
      }
    );

    tl.fromTo(
      '.scroll-div3',
      {
        opacity: 0,
        display: 'none',
        zIndex: 20,
        y: 6000,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show slide 3 Container',
          ease: 'expoScale(0.5,7,none)',
        },
        opacity: 1,
        display: 'block',
        zIndex: 25,
        y: 0,
      }
    );

    relativeTop += relativeTopScroll;
    tl.fromTo(
      '.top-left-mobile-icon img, .bottom-right-mobile-icon img',
      {
        width: '200px',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'shrink slide 2 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        width: '100px',
      }
    );
    tl.fromTo(
      '.image-container3',
      {
        width: '75%',
        top: '30vh',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Shrink slide 3 Container',
          ease: 'expoScale(0.5,7,none)',
        },
        width: '30%',
        top: '0vh',
      }
    );
    tl.fromTo(
      '.scroll-div4',
      {
        opacity: 0,
        display: 'none',
        zIndex: 25,
        y: 9000,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show slide 4 Container',
          ease: 'expoScale(0.5,7,none)',
        },
        opacity: 1,
        display: 'block',
        zIndex: 30,
        y: 0,
      }
    );
    relativeTop += relativeTopScroll;
    tl.fromTo(
      '.image-container4',
      {
        width: '75%',
        opacity: 1,
        top: '30vh',
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'hide Image 4 Container',
          ease: 'expo.in',
        },
        width: '50%',
        opacity: 0,
        top: '0vh',
      }
    );

    tl.fromTo(
      '.top-left-hand-icon4 img, .bottom-right-hand-icon4 img',
      {},
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'shrink slide 2 Container',

          ease: 'expoScale(0.5,7,none)',
        },
        scale: '0.7',
      }
    );

    relativeTop += relativeTopScroll + 500;
    tl.fromTo(
      '.subscribe-text-container',
      {
        opacity: 0,
        display: 'none',
        zIndex: 25,
        y: -800,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Show subscription 4 Container',
          ease: CustomEase.create('custom', 'M0,0 C0.366,0 0.689,0.069 0.826,0.19 1.053,0.39 1,1 1,1 '),
        },
        opacity: 1,
        display: 'block',
        zIndex: 30,
        y: 0,
      }
    );

    tl.fromTo(
      '.custom-subscribe-footer',
      {
        opacity: 0,
        display: 'none',
        zIndex: 25,
      },
      {
        scrollTrigger: {
          trigger: '#feature-parent-wrapper',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Show subscription 4 Container',
          ease: CustomEase.create('custom', 'M0,0 C0.366,0 0.689,0.069 0.826,0.19 1.053,0.39 1,1 1,1 '),
        },
        opacity: 1,
        display: 'flex',
        zIndex: 30,
      }
    );
  };

  ///////////End onPageLoad////////

  const defaultVideos = [wavierIconVideo, wavierIconVideo, wavierIconVideo, wavierIconVideo];

  const calculateTextPosition = (index) => {
    // Assuming selectedIndex is defined somewhere in your component
    if (selectedIndex !== null) return null;

    let positions = [
      { top: '0.5rem', left: '100px', text: 'MULTIPLAYER GAMING PLATFORM' },
      { top: '1rem', left: '85px', text: 'SOCIAL HUBS' },
      { bottom: '-0.5rem', left: '70px', text: 'USER GENERATED CONTENT' },
      { bottom: '-0.5rem', left: '100px', text: 'INFLUENCER OR USER MANAGED TOURNAMENTS' },
    ];
    return positions[index];
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (selectedIndex === null) {
      setMoveLeft(false);
      setShowCard(false);
      setScrollMoveRight(false); // Reset scroll box position
    }

    onPageLoad();
  }, [selectedIndex]);

  const navigateToHomePage = () => {
    navigate('/');
  };
  return (
    <div className="relative  flex items-center justify-center " id="feature-parent-wrapper">
      <div className="parent-wrapper">
        <div className="parent-container">
          <div className="vectorBgImage">
            <div className="feature-leftarrow-icon-container">
              <button className="feature-leftarrow-icon back-button" onClick={navigateToHomePage}>
                <ArrowBackIcon className="custom-back-icon" style={{ color: '#AAA', fontSize: 20 }} />
                <div className="back-text back-text-btn">Home</div>
              </button>
            </div>

{/*             <div className="feature-joinNow-btn-container">
              <button
                className="feature-joinNow-btn"
                onClick={() => {
                  window.open('https://app.peer2play.ai/', '_self');
                }}
              >
                Join Now
              </button>
            </div> */}
            <div className="UGC-container">
              {positionsToShow.map((pos, index) => (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className={`positioned-video-container absolute ${pos.className} ${pos.position} ${pos.size} ${
                      isMobileView ? 'overflow-hidden' : ''
                    } ${hoveredIndex === index ? 'zoom' : ''} ${
                      selectedIndex === index
                        ? moveLeft
                          ? 'selected move-left'
                          : 'selected'
                        : selectedIndex !== null
                        ? 'hidden'
                        : ''
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleVideoSelect(index)}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      webkit-playsinline="true"
                      playsInline
                      className={`object-cover w-full h-full transition-all duration-300 bg-gray-800 ${
                        hoveredIndex === index ? 'scale-up' : ''
                      }`}
                      style={{ borderRadius: '50%' }}
                    >
                      <source src={defaultVideos[index]} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                    <div className="custom-text-div" style={calculateTextPosition(hoveredIndex)}>
                      {hoveredIndex != null && calculateTextPosition(index) != null && hoveredIndex == index && (
                        <p className="font-bold text-white custom-text">{calculateTextPosition(index).text}</p>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ))}

              {showCard && (
                <div className="card">
                  <div className="card-content">
                    {selectedIndex === 0 && (
                      <div className="card-title">
                        <div className="icon-div">
                          <img
                            src="assets/multiplayer.png"
                            alt="Multiplayer Icon"
                            className="icon-image custom-multiplayer-icon"
                          />
                        </div>
                      </div>
                    )}
                    {selectedIndex === 1 && (
                      <div className="card-title">
                        <div className="icon-div">
                          <img
                            src="assets/social-hub.png"
                            alt="Social hub Icon"
                            className="icon-image social-hub-icon"
                          />
                        </div>
                      </div>
                    )}

                    {selectedIndex === 3 && (
                      <div className="card-title">
                        <div className="icon-div">
                          <img src="assets/cup-removebg.png" alt="Cup Icon" className="icon-image custom-cup" />
                        </div>
                        <div className="boll-icon-div">
                          <img
                            src="assets/boll-removebg-preview.png"
                            alt="boll Icon"
                            className="icon-image custom-boll"
                          />
                        </div>
                        <div className="icon-div">
                          <img
                            src="assets/control-removebg-preview.png"
                            alt="control Icon"
                            className="icon-image custom-control"
                          />
                        </div>
                      </div>
                    )}
                    {selectedIndex === 2 && (
                      <div className="card-title">
                        <div className="icon-div">
                          <img
                            src="assets/user-generated.png"
                            alt="User Generated Icon"
                            className="icon-image custom-user-generated-icon"
                          />
                        </div>
                      </div>
                    )}

                    <div className="card-description">
                      <p>{videoDescriptions[selectedIndex]}</p>
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`absolute z-10 flex flex-col items-center main-video-container ${
                  selectedIndex !== null ? 'hidden' : ''
                }`}
              >
                <div className="video-main-container">
                  <div className="video-container">
                    <video
                      width="400"
                      autoPlay
                      loop
                      muted
                      className="custom-video-tag"
                      // eslint-disable-next-line react/no-unknown-property
                      webkit-playsinline="true"
                      playsInline
                    >
                      <source src={wavierIconVideo} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white custom-video-text">User Generated Content</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`scroll-div-button ${scrollMoveRight ? 'slide-right' : ''}`}>
                {showCard ? (
                  <div className="back-button" onClick={handleBackButtonClick}>
                    <div className="back-text">Back</div>
                    <ArrowRightAltIcon className="custom-back-icon" />
                  </div>
                ) : (
                  <div className="mt-4 text-white custom-scroll-div">
                    <div className="scroll-text">Scroll</div>
                    <div>
                      <MouseOutlinedIcon className="mouse-icon" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="DCL-container">
              <div className="featureDCL-main-container">
                <div className="dcl-img-div">
                  <img className="dcl-img" src="assets/Dcl-img.webp" alt="DCL img" />

                </div>
                <div className="join-btn-div">
                  <button
                    onClick={() => {
                      window.open('https://app.peer2play.ai/dashboard/games/', '_self');
                    }}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
            <div className="slides-container">
              <div className="scrollContent-container">
                <div className="scroll-div scroll-div1">
                  <ScrollText1 />
                </div>
                <div className="scroll-div scroll-div2">
                  <ScrollText2 />
                </div>
                <div className="scroll-div scroll-div3">
                  <ScrollText3 />
                </div>
                <div className="scroll-div scroll-div4">
                  <ScrollText4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

