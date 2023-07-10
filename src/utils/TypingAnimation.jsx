import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Developer', 'Backend Developer', 'Full Stack'], 
      typeSpeed: 100,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return <span ref={typedRef}></span>
};

export default TypingAnimation;
