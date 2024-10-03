// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './ScrollText4.css';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import handIcon from '/assets/handIcon.webp';
import { useNavigate } from 'react-router-dom';
import SubscribeDialog from './SubscribeDialog';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useSubscribe from './useSuscribe'; // Import the custom hook

const ScrollText4 = () => {
  // const [email, setEmail] = useState('');
  // const [atBottom, setAtBottom] = useState(false);
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [errors, setErrors] = useState({});
  // const { subscribe, loading, dialogType, dialogMessage } = useSubscribe(); // Use the custom hook

  const [email, setEmail] = useState('');
  const [atBottom, setAtBottom] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const [errors, setErrors] = useState({});
  const { subscribe, loading } = useSubscribe(); // Use the custom hook

  const navigate = useNavigate();

  const scrollToTop = () => {
    navigate('/');
  };

  const validateEmail = (email) => {
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_regex.test(String(email).toLowerCase());
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let formErrors = {};

  //   if (!email) {
  //     formErrors.email = 'Email is required';
  //   } else if (!validateEmail(email)) {
  //     formErrors.email = 'Invalid email format';
  //   }

  //   if (Object.keys(formErrors).length === 0) {
  //     await subscribe(email);
  //     setEmail('');
  //     setDialogOpen(true);
  //   }
  //   setErrors(formErrors);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Please Re-enter your Email.';
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

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setAtBottom(bottomReached);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="slide4-container">
        <div className="background-video4" />
        <div className="image-container4">
          <div className="top-left-hand-icon4">
            <img src={handIcon} alt="Hand Icon" className="top-hand-icon" />
          </div>
          <img src="/assets/scroll-text4.webp" alt="Scroll-text" className="scroll-text-image4" />
          <div className="bottom-right-hand-icon4">
            <img src={handIcon} alt="Hand Icon" className="bottom-hand-icon4" />
          </div>
        </div>
        <div className="subscribe-text-container">
          <div className="custom-container flex flex-col mx-10 h-full space-y-6">
            <h1 className="subscribe-heading">Get Whitelisted</h1>
            <form
              className="custom-mail-input rounded-full bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="email"
                placeholder="Your Email"
                className={`custom-placeholder px-4 py-2 text-black bg-transparent rounded-full focus:outline-none ${
                  errors.email ? 'input-error' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="custom-subscribe-text custom-submit-btn">
                Submit
              </button>
            </form>
            {errors.email && (
              <Typography color="error" variant="body2" className="error-message" id="error-message">
                {errors.email}
              </Typography>
            )}
            {errors.api && (
              <Typography color="error" variant="body2" className="error-message">
                {errors.api}
              </Typography>
            )}

            <div className="text-center text-black text-2xl flex flex-col gap-4 footer-content-container">
              <p className="custom-subscribe-text mt-4 custom-DMP-text">A Decentralized Multiplayer Platform</p>
              <div className="custom-links flex justify-center space-x-4">
                <a
                  href="https://x.com/Peer2Play_P2P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-subscribe-text hover:underline"
                >
                  <img className="social-icon-img" src="assets/x-icon.png" alt="X Icon" />
                </a>
                <span className="dots">•</span>
                <a
                  href="https://t.me/Peer2PlayAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-subscribe-text hover:underline"
                >
                  <img className="social-icon-img" src="assets/telegram-icon.png" alt="Telegram Icon" />
                </a>
                <span className="dots">•</span>
                <a
                  href="https://discord.gg/jnQMgmsQW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-subscribe-text hover:underline"
                >
                  <img className="social-icon-img" src="assets/discord-icon.png" alt="Discord Icon" />
                </a>
              </div>
              <p className="custom-subscribe-text mailto-text mt-2 text-center">
                <a href="mailto:contact@peer2play.ai">contact@peer2play.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-subscribe-text custom-subscribe-footer">
        <div className="footer-links">
          <div className="scrollText4-footer">
            <span>
              <img className="copyright-icon" src="assets/copyright-icon.png" alt="Copyright Icon" />
            </span>
            2024 All Rights Reserved Peer2Play
          </div>
        </div>
      </div>
      <div className="scrollbox-div">
        <div className="custom-scroll-box4">
          {atBottom ? (
            <div style={{ width: '100%', display: 'contents' }} className="scroll-top" onClick={scrollToTop}>
              <div className="scroll-box-text4">Begin</div>
              <div className="upArrow-icon-div4">↑</div>
            </div>
          ) : (
            <div style={{ width: '100%', display: 'contents' }}>
              <div className="scroll-box-text4">Scroll</div>
              <div className="mouse-icon-div4">
                <MouseOutlinedIcon className="icon4" />
              </div>
            </div>
          )}
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

export default ScrollText4;
