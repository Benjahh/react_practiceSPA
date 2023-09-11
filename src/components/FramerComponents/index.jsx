import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '../customHooks';

    const FadeInOnScroll = ({ children }) => {
    const ref = useRef();
    const controls = useAnimation();
    useIntersectionObserver(ref, controls)


    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
        >
        {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
