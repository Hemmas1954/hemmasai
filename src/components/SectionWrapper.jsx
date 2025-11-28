import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const RevealOnScroll = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`relative py-20 ${className}`}>
            {/* Connecting Light Beam */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-20 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container relative z-10"
            >
                {children}
            </motion.div>

            {/* Background Glow for Section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
    );
};
