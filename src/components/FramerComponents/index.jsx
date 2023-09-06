import React, { useEffect, useRef } from 'react'
import { easeIn, motion, useAnimate, useAnimation } from 'framer-motion'

export const FadeInComponent = ({children}) => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 4}}
            className="bg-black text-white"
        >
            TEST FADE IN
        </motion.div>
    )
    }

export const FadeInOnScroll = () => {
    const ref = useRef()
    const control = useAnimation()

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
              threshold: 0.5, // Adjust this threshold as needed
            }
            );

            if (ref.current) {
            observer.observe(ref.current);
            }
          // Cleanup the observer when the component unmounts
            return () => {
                if (ref.current) {
                observer.unobserve(ref.current);
            }
            };
        }, [controls]);

    const fadeInVariant = [{
    hidden: { opacity: 0},
    visible: { opacity: 1}
    }]

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
      
}


