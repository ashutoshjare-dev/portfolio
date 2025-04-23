import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = (Component, delay = 0) => {
  return function WrappedComponent(props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default MotionWrapper;
