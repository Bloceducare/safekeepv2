import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const texts = ["Inherit", "Trade", "Sell", "Store"];


const textVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const AnimatedText = ({ text, delay, isHidden }) => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(async () => {
      await controls.start("animate");
      await controls.start("exit");
    }, delay);

    return () => clearInterval(interval);
  }, [controls, delay]);

  return (
    <motion.span
      className="blog-author inline-flex"
      variants={textVariants}
      initial="initial"
      animate={controls}
      exit="exit"
      hidden={isHidden}
    >
      {text}
    </motion.span>
  );
};

const App = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((currentIndex) => {
        if (currentIndex === texts.length - 1) {
          return 0;
        }
        return currentIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
      <AnimatedText
        text={
          currentTextIndex === texts.length - 1
            ? texts[0]
            : texts[currentTextIndex + 1]
        }
        delay={1500}
        isHidden={true}
      />
   
  );
};

export default App;
