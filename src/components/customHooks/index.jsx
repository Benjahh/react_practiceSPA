import { useEffect } from "react";

export const useIntersectionObserver = (ref, controls)  => {
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

}