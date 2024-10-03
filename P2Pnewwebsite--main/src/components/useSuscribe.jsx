import { useState } from 'react';

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email) => {
    setLoading(true); // Set loading to true when the API call starts
    let responseStatus = 'error'; // Default to error status

    try {
      const response = await fetch('https://atdk4ast61.execute-api.ap-southeast-2.amazonaws.com/dev/emailList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'ZoAbxacUI15hxiBZuhUMQ6bV8xKlIcNP25p5pZGQ',
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.text();

      if (response.ok && responseData === 'Thank you for subscribing') {
        responseStatus = 'success';
      } else if (response.ok && responseData === 'User already registered') {
        responseStatus = 'email existed';
      } else {
        responseStatus = 'error';
      }
    } catch (error) {
      responseStatus = 'error';
    } finally {
      setLoading(false); // Set loading to false when the API call ends
    }

    return responseStatus;
  };

  return { loading, subscribe };
};

export default useSubscribe;

