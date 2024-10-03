// Import React hooks and other dependencies
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import gsap from 'gsap';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import './SplineHome.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

import vrImg from '/assets/vr.png';
import bitCoinImage from '/assets/bitcoin.png';
import telegramImage from '/assets/telegram.png';
import discodelCoinImage from '/assets/DiscodeIcoin.png';
import logoImg1 from '/assets/p2P-logoWhite.webp';
import logoImg2 from '/assets/p2P-logo-.webp';

import wavierIconVideo from '/assets/wavier-icon.mp4';
import CoinBaseimg from '/assets/basechain.webp';
import robotImage from '/assets/Robot Holding.webp';
import robotFront from '/assets/Robot Front.webp';
import SubscribeDialog from './SubscribeDialog'; // Import SubscribeDialog
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useSubscribe from './useSuscribe'; // Import the custom hook

const SplineScene = () => {
  const navigate = useNavigate();
  const [showSpline1, setShowSpline1] = useState(true);
  const [bgImage, setBgImage] = useState('BG_IMAGE_1');
  const [logoImage, setLogoImage] = useState('LOGO_IMAGE_1');
  const [joinNowBtn, setJoinNowBtn] = useState('JOIN_NOW_BUTTON_1');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const webSplineUrl = 'https://prod.spline.design/YFNcb8b3q96FFJ1M/scene.splinecode';
  const socialMediaSpline = 'https://prod.spline.design/QEbmilWp8zqBkOg4/scene.splinecode';
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog
  const [errors, setErrors] = useState({});
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const { subscribe, loading } = useSubscribe(); // Use the custom hook

  const handleClick = () => {
    navigate('/Features');
  };
  const validateEmail = (email) => {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_regex.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Please Re-enter your Email';
    }

    if (Object.keys(formErrors).length === 0) {
      // No validation errors, proceed with subscription
      const result = await subscribe(email);
      setEmail(''); // Clear the input field

      if (result === 'success') {
        setDialogType('success');
        setDialogMessage(
          'The innovative platform that merges gaming with cutting-edge Web3 technology. By joining our whitelist, you will be among the first to experience a revolution in how you play, compete, and earn.'
        );
      } else if (result === 'email existed') {
        setDialogType('email existed');
        setDialogMessage('This email is already registered. Please use a different email address.');
      } else {
        setDialogType('error');
        setDialogMessage('Failed to subscribe. Please try again.');
      }
    } else {
      setDialogType('error');
      setDialogMessage(formErrors.email); // Use the specific error message
    }

    setDialogOpen(true);
    setErrors(formErrors); // Update the form errors state
  };

  const app2 = useRef(null);

  const setSpline2 = async (spline) => {
    app2.current = spline;
  };

  function delay() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }

  const onLoad2 = async () => {
    while (!isMobile && (await app2.current) == null) {
      await delay(1000);
    }

    var relativeTop = 1500;
    var enableMarkers = false;
    var endScroll = '+=700px';
    var relativeTopScroll = 1000;
    let scrubVal = 1;

    var tl = gsap.timeline({
      duration: 2,
    });

    tl.fromTo(
      '.home-spline',
      {
        opacity: 1,
        display: 'block',
        zIndex: 15,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: true,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Hide home spline Container',
        },
        opacity: 0,
        display: 'none',
        zIndex: 0,
        onComplete: () => {
          setBgImage('BG_IMAGE_3');
          setLogoImage('LOGO_IMAGE_2');
          setJoinNowBtn('JOIN_NOW_BUTTON_2');
        },
        onReverseComplete: () => {
          setBgImage('BG_IMAGE_1');
          setLogoImage('LOGO_IMAGE_1');
          setJoinNowBtn('JOIN_NOW_BUTTON_1');
        },
      }
    );

    tl.fromTo(
      '.peer-content-container',
      {
        opacity: 1,
        display: 'block',
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: '+=300px',
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Hide home spline Container',
        },
        opacity: 0,
        display: 'none',
        y: -300,
      },
      '0'
    );

    relativeTop += 1000;
    tl.fromTo(
      '.connect-wallet-container',
      {
        opacity: 0,
        display: 'none',
        zIndex: 0,
        y: 700,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: '+=100px',
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO',
        },
        opacity: 1,
        display: 'flex',
        zIndex: 15,
        y: 0,
      }
    );

    relativeTop += 100;

    let connectWalletScrollEnd = '+=300px';

    tl.fromTo(
      '.connect-wallet-text',
      {
        opacity: 0,
        y: 300,
        zIndex: 0,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        zIndex: 15,
        opacity: 1,
        y: 0,
      },
      '+=0'
    );

    tl.fromTo(
      '.base-text',
      {
        opacity: 0,
        x: -300,
        zIndex: 0,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 300 + 'px bottom',
          end: isMobile ? '+=0px' : '+=200px',
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        zIndex: 15,
        opacity: 1,
        x: 0,
      },
      '+=0'
    );

    tl.fromTo(
      '.p2p-img',
      {
        opacity: 0,
        y: 300,
        x: 300,
        zIndex: 0,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        zIndex: 15,
        opacity: 1,
        y: 0,
        x: 0,
      },
      '+=0'
    );

    // fadeout screen
    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.connect-wallet-text',
      {},
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        opacity: 0,
        y: -300,
      },
      '+=0'
    );

    tl.fromTo(
      '.base-text',
      {
        x: 0,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        zIndex: 0,
        opacity: 0,
        x: -300,
      },
      '+=0'
    );

    tl.fromTo(
      '.p2p-img',
      {},
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'show connect wallet text',
        },
        zIndex: 0,
        opacity: 0,
        y: -300,
        x: 300,
        scale: 0.8,
      },
      '+=0'
    );

    relativeTop += 500;

    tl.fromTo(
      '.connect-wallet-container',
      {
        // opacity: 1,
        // display: 'flex',
        zIndex: 15,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: connectWalletScrollEnd,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO',
        },
        opacity: 0,
        zIndex: 0,
        y: -300,
      },
      '+=0'
    );

    // white-bg-wrraper
    relativeTop += 300;

    tl.fromTo(
      '.white-bg-wrraper',
      {
        opacity: 0,
        display: 'none',
        zIndex: 0,
        y: 200,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: '+=200px',
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'social spline container',
        },
        opacity: 1,
        display: 'block',
        zIndex: 15,
        y: 0,
      }
    );
    relativeTop += 400;
    tl.fromTo(
      '.social-media-overlay',
      {
        opacity: 0,
        display: 'none',
        y: -200,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO',
        },
        opacity: 1,
        display: 'block',
        y: 0,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.social-media-overlay',
      {
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO hide',
        },
        opacity: 0,
        display: 'none',
        y: -200,
      }
    );

    relativeTop += 400;
    tl.fromTo(
      '.get-whitelisted-overlay',
      {
        opacity: 0,
        display: 'none',
        y: -200,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO',
        },
        opacity: 1,
        display: 'block',
        y: 20,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.get-whitelisted-overlay',
      {
        // opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'SMO hide',
        },
        opacity: 0,
        display: 'none',
        y: -200,
      }
    );

    if (isMobile) {
      tl.fromTo(
        '#robot2',
        {
          opacity: 1,
          scale: '4',
        },
        {
          scrollTrigger: {
            trigger: '#robots-container',
            start: relativeTop + 'px bottom',
            end: endScroll,
            scrub: scrubVal,
            markers: enableMarkers,
            toggleActions: 'play reverse play reverse',
            id: 'SMO hide',
          },
          opacity: 0,
          scale: '3.5',
          // display: 'none',
          y: -200,
        },
        '+=0'
      );
    }
    let camera = null;
    if (!isMobile) camera = await app2.current.findObjectById('9a63b342-8e0c-44ed-b813-f5532c9c4ea8');

    let defaultCameraPosition = {};
    if (camera != null) {
      defaultCameraPosition = camera.position;
    } else {
      console.log('Camera object not found');
    }

    const leftCameraPosition = { x: -50, y: 320, z: 900 };
    const rightCameraPosition = { x: -350, y: 320, z: 900 };

    if (!isMobile) {
      relativeTop += relativeTopScroll;
      tl.fromTo(
        camera.position,
        {
          opacity: 1,
        },
        {
          scrollTrigger: {
            trigger: '#robots-container',
            start: relativeTop + 'px bottom',
            end: endScroll,
            scrub: scrubVal,
            markers: enableMarkers,
            toggleActions: 'play reverse play reverse',
            id: 'SMO-Camera',
          },
          ...leftCameraPosition,
          duration: 1,
        }
      );
    }

    relativeTop += relativeTopScroll;

    let mobileFrom = {};
    let mobileTo = {};
    if (isMobile) {
      mobileFrom = { y: 100 };
      mobileTo = { x: window.innerWidth - (window.innerWidth - 350) / 2, y: 100 };
    }

    tl.fromTo(
      '.social-gaming-text-container',
      {
        opacity: 0,
        display: 'none',
        y: 0,
        ...mobileFrom,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Social gaming',
        },
        opacity: 1,
        display: 'block',
        y: -100,
        ...mobileTo,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.social-gaming-text-container',
      {
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Social gaming 1 Hide',
        },
        x: -400,
        opacity: 0,
        display: 'none',
      }
    );

    if (!isMobile) {
      relativeTop += relativeTopScroll;
      tl.fromTo(
        camera.position,
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: '#robots-container',
            start: relativeTop + 'px bottom',
            end: endScroll,
            scrub: scrubVal,
            markers: enableMarkers,
            toggleActions: 'play reverse play reverse',
            id: 'SMO-Camera 2',
          },
          ...rightCameraPosition,
          duration: 1,
        }
      );
    }

    if (isMobile) {
      mobileFrom = { y: 100 };
      mobileTo = { x: -window.innerWidth + (window.innerWidth - 350) / 2, y: 100 };
    }

    relativeTop += 400;

    tl.fromTo(
      '.social-gaming-text-container2',
      {
        opacity: 0,
        display: 'none',
        y: 0,
        ...mobileFrom,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Social gaming 2',
        },
        opacity: 1,
        display: 'block',
        y: -100,
        ...mobileTo,
      }
    );

    relativeTop += relativeTopScroll;

    tl.fromTo(
      '.social-gaming-text-container2',
      {
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: endScroll,
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'Social gaming 2 Hide',
        },
        x: 400,
        opacity: 0,
        display: 'none',
      }
    );

    if (!isMobile) {
      relativeTop += relativeTopScroll;
      tl.fromTo(
        camera.position,
        { opacity: 1 },
        {
          scrollTrigger: {
            trigger: '#robots-container',
            start: relativeTop + 'px bottom',
            end: endScroll,
            scrub: scrubVal,
            markers: enableMarkers,
            toggleActions: 'play reverse play reverse',
            id: 'Social gaming 1 Hide',
          },
          ...defaultCameraPosition,
          z: 1300,
          duration: 1,
        }
      );
    }

    if (isMobile) {
      tl.fromTo(
        '#robot2',
        {},
        {
          scrollTrigger: {
            trigger: '#robots-container',
            start: relativeTop + 'px bottom',
            end: endScroll,
            scrub: scrubVal,
            markers: enableMarkers,
            toggleActions: 'play reverse play reverse',
            id: 'SMO hide',
          },
          opacity: 1,
          scale: '4',
          // display: 'none',
          y: 0,
          duration: 1,
        },
        '+=0'
      );
    }

    relativeTop += relativeTopScroll;
    tl.fromTo(
      '.water-wave',
      {
        opacity: 0,
        display: 'none',
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#robots-container',
          start: relativeTop + 'px bottom',
          end: '+=0',
          scrub: scrubVal,
          markers: enableMarkers,
          toggleActions: 'play reverse play reverse',
          id: 'water wave',
        },
        y: 500,
        x: 20,
        opacity: 1,
        display: 'block',
        scale: 1,
      }
    );
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const loadScenesSequentially = async () => {
      gsap.registerPlugin(ScrollTrigger);
    };

    //allow user to navigate to next on reaching end of page - Web view
    // window.onscroll = function (ev) {
    //   if (window.innerHeight + window.scrollY == document.body.offsetHeight) window.location = '/Features';
    // };
    //allow user to navigate to next on reaching end of page - Mobile view
    // document.body.ontouchmove = function (e) {
    //   if (window.innerHeight + window.scrollY == document.body.offsetHeight) window.location = '/Features';
    // };

    loadScenesSequentially();
    const handleResize = () => {
      checkIsMobile();
    };

    const checkIsMobile = () => {
      setIsMobile(
        window.innerWidth <= 600 ||
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    checkIsMobile();
    window.addEventListener('resize', handleResize);
    onLoad2();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  let className = '';
  let classNameLogo = '';
  let classNameJOINNOW_Btn = '';
  if (bgImage === 'BG_IMAGE_2' && logoImage === 'LOGO_IMAGE_2' && joinNowBtn === 'JOIN_NOW_BUTTON_2') {
    className = 'robot-bg-img-2';
    classNameLogo = 'logo-img-2';
    classNameJOINNOW_Btn = 'join-now-btn-2';
  } else if (bgImage === 'BG_IMAGE_3' && logoImage === 'LOGO_IMAGE_2' && joinNowBtn === 'JOIN_NOW_BUTTON_2') {
    className = 'robot-bg-img-3';
    classNameLogo = 'logo-img-2';
    classNameJOINNOW_Btn = 'join-now-btn-2';
  } else {
    className = 'robot-bg-img';
    classNameLogo = 'logo-img';
    classNameJOINNOW_Btn = 'join-now-btn';
  }

  return (
    <>
      <header className="header">
        <div className="logo ">
          {classNameLogo === 'logo-img' ? (
            <div className="logo-container">
              <img src={logoImg1} alt="Logo 1" />
            </div>
          ) : classNameLogo === 'logo-img-2' ? (
            <div className="logo-container">
              <img src={logoImg2} alt="Logo 2" loading="lazy" />
            </div>
          ) : null}
        </div>
        <nav className="nav">
{/*           <button
            className={`${classNameJOINNOW_Btn}`}
            onClick={() => {
              window.open('https://app.peer2play.ai/', '_self');
            }}
          >
            Join Now
          </button> */}
        </nav>
      </header>
      <div className="relative " id="home-parent-wrapper">
        <div id="robots-container">
          <div
            className={`w-max mx-auto h-[100vh] flex flex-col align-bottom ${className}`}
            style={{ width: '100%', position: 'fixed' }}
            id="robots"
          >
            <div className="bg-white-container">
              <div className="home-spline">
                <div
                  className="peer-content-container"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: showSpline1 ? 15 : -100,
                  }}
                >
                  <div className="p2p-header">
                    <h2>
                      PEER
                      <span className="number2">2</span>
                      PLAY
                    </h2>
                    <p>Connect, Invite, Challenge & Earn</p>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    height: '100vh',
                    width: '100%',
                    zIndex: showSpline1 ? 5 : -100,
                    top: isMobile ? '50%' : 'auto',
                  }}
                >
                  {isMobile ? (
                    <Suspense>
                      <img src={robotFront} className="spineImg" loading="lazy" alt='robotImg'/>
                    </Suspense>
                  ) : (
                    <Suspense>
                      <Spline scene={webSplineUrl} className="robot" id="robot1" />
                    </Suspense>
                  )}
                </div>
              </div>

              <div className="connect-wallet-container">
                <div className="connect-wallet-wrapper">
                  <div className="main-text">
                    <p className="connect-wallet-text">
                      CONNECT YOUR <span className="span-class">WALLET</span>
                    </p>
                  </div>
                  <div className="base-text">
                    <p>
                      Built on <img loading="lazy" className="coinbase-img" src={CoinBaseimg} alt='coinbaseTextImg'/>
                    </p>
                  </div>
                </div>
                <div className="p2p-img">
                  <video
                    src="assets/P2P coin white BG.webm"
                    // src="assets/coin-render-video.webm"
                    autoPlay
                    loop
                    muted
                    webkit-playsinline="true"
                    playsInline
                    style={{ filter: 'none' }}
                  ></video>
                </div>
              </div>
              <div className="white-bg-wrraper">
                <div
                  style={{
                    position: 'absolute',
                    height: '100vh',
                    width: '100%',
                    zIndex: showSpline1 ? 5 : -100,
                    top: isMobile ? '50%' : 'auto',
                  }}
                  className="socialMediaRobot"
                >
                  {isMobile ? (
                    <>
                      <img src={robotImage} className="spineImg" id="robot2" loading="lazy"></img>
                      <p>{isMobile}</p>
                    </>
                  ) : (
                    <Suspense>
                      <Spline scene={socialMediaSpline} onLoad={setSpline2} className="robot" id="robot2" />
                    </Suspense>
                  )}
                </div>
                <div className="text-overlay social-media-overlay">
                  <div style={{ position: 'absolute', top: 0, alignItems: 'center', width: '100%', height: '100vh' }}>
                    <h1 className="connect-your-text">CONNECT YOUR</h1>

                    <div className="social-media-container">
                      <h1 className="social-media social-heading">SOCIAL</h1>
                      <h1 className="social-media media-heading">MEDIA</h1>
                    </div>
                  </div>
                  <div
                    className="text-overlay"
                    style={{
                      position: 'absolute',
                      width: '90%',
                      height: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '5% 5%',
                    }}
                  >
                    <div
                      className="social-media-icons-wrapper"
                      style={{ display: 'flex', justifyContent: 'center', gap: '0px' }}
                    >
                      <a href="https://x.com/Peer2Play_P2P" target="_blank" className="social-media-link">
                        <img
                          src={bitCoinImage}
                          alt="Image 1"
                          style={{ width: '140px' }}
                          className="zoomSM"
                          loading="lazy"
                        />
                      </a>
                      <div style={{ marginTop: '-70px' }}>
                        <a href=" https://t.me/Peer2PlayAI" target="_blank" className="social-media-link">
                          <img
                            src={telegramImage}
                            alt="Image 2"
                            style={{ width: '180px' }}
                            className="zoomSM"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <a href="https://discord.gg/jnQMgmsQW8" target="_blank" className="social-media-link">
                        <img
                          src={discodelCoinImage}
                          alt="Image 3"
                          style={{ width: '140px' }}
                          className="zoomSM"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-overlay get-whitelisted-overlay" style={{ zIndex: '10' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      alignItems: 'center',
                      width: '100%',
                      height: '100vh',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <h1 className="social-media social-heading">GET WHITELISTED</h1>

                    <div className="get-whitelisted-container">
                      <form
                        className="gv-custom-mail-input rounded-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <input
                          type="email"
                          placeholder="Your Email"
                          className={`gv-custom-placeholder px-4 py-2 text-black bg-transparent rounded-full focus:outline-none ${
                            errors.email ? 'input-error' : ''
                          }`}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="gv-custom-subscribe-text gv-custom-submit-btn">
                          Submit
                        </button>
                      </form>
                      {errors.email && (
                        <Typography
                          color="error"
                          variant="body2"
                          className="error-message-text"
                          id="error-message-text"
                        >
                          {errors.email}
                        </Typography>
                      )}
                      {errors.api && (
                        <Typography color="error" variant="body2" className="error-message-text">
                          {errors.api}
                        </Typography>
                      )}
                    </div>
                  </div>
                </div>

                <div className="social-gaming-text-container" id="social-gaming-text-container">
                  <div>
                    <img src={vrImg} alt="VR Image" className="vr-img sgp-vr-img" loading="lazy" />
                  </div>
                  <div className="social-gaming-text">
                    <div className="dist-text-div">
                      <h2 className="dist-text">A SOCIAL </h2>
                      <h2 className="dist-text">GAMING </h2>
                      <h2 className="dist-text">PLATFORM </h2>
                    </div>
                    <p>
                      Peer2Play has the potential to revolutionize social gaming by creating more interactive,
                      community-driven, and secure gaming experiences. By leveraging P2P technology, social games can
                      foster stronger player communities, encourage creativity through user-generated content, and
                      provide a scalable and cost-effective platform for developers. However, addressing challenges
                      related to network management, consistency, and fair play will be crucial to fully realize the
                      potential of Peer2Play in social gaming.
                    </p>
                  </div>
                </div>

                <div className="social-gaming-text-container2">
                  <div>
                    <img src={vrImg} alt="VR Image" className="vr-img gd-vr-img" loading="lazy" />
                  </div>
                  <div className="social-gaming-text">
                    <div className="custom-sgt">
                      <h2 className="dist-text">GAME</h2>
                      <h2 className="dist-text">DISTRIBUTION</h2>
                    </div>

                    <p>
                      Peer2Play is revolutionizing the gaming industry with its Cross-border Global Game Distribution
                      Platform, offering seamless access to a vast array of games for users across numerous countries.
                      Our platform addresses and overcomes the myriad challenges associated with infrastructure,
                      compliance, and user experience, ensuring a smooth and enjoyable gaming journey for all.
                      Peer2Play's mission is to create a seamless, enjoyable, and globally accessible gaming experience.
                      By addressing infrastructure challenges, ensuring compliance, and prioritizing user experience, we
                      are setting new standards in the world of cross-border game distribution.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    height: '100vh',
                    width: '100vw',
                  }}
                >
                  <div className="water-wave" onClick={handleClick}>
                    <div className="water-wave-container">
                      <Suspense>
                        <video
                          // eslint-disable-next-line react/no-unknown-property
                          webkit-playsinline="true"
                          playsInline
                          autoPlay
                          loop
                          muted
                          className="custom-video-tag spline-home-video "
                        >
                          <source src={wavierIconVideo} type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>
                      </Suspense>
                      <div className="click-to-scroll-text">Click To Scroll</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        dialogType={dialogType}
        dialogMessage={dialogMessage}
      />
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            padding: 2,
            borderRadius: 1,
            width: '100%', // Ensure the box takes the full width of its container
            height: '100vh', // Take the full viewport height
            position: 'fixed', // Fix it to the screen
            top: 0, // Start from the top
            left: 0, // Start from the left
            zIndex: 9999, // Ensure it's on top of other elements
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default SplineScene;

