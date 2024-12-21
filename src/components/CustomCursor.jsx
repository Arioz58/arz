import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import "../styles/CustomCursor.css";

const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isOutside, setIsOutside] = useState(false);

  const springConfig = { stiffness: 2000, damping: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(isOutside ? 0 : 1, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseOut = () => {
      setIsOutside(true);
    };

    const handleMouseOver = () => {
      setIsOutside(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [x, y]);

  useEffect(() => {
    opacitySpring.set(isOutside ? 0 : 1);
  }, [isOutside, opacitySpring]);

  return (
    <motion.div
      className={`custom-cursor ${isClicked ? 'clicked' : ''}`}
      style={{
        x: xSpring,
        y: ySpring,
        opacity: opacitySpring,
      }}
    >
      <div className="outline"></div>
      <div className="cursor-noise"></div>
    </motion.div>
  );
};

export default CustomCursor;