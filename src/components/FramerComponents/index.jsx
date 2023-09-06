import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

    const FadeInOnScroll = ({ children }) => {
    const ref = useRef();
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                controls.start('visible');
            }
            });
        },
        {
            threshold: 0.5,
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
        };
    }, [controls]);

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
