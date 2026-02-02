"use client";

import {
    ReactNode,
    useRef,
    Fragment
} from "react";
import {
    motion,
    useScroll,
    useTransform
} from "motion/react";

const initial = {
    opacity: 0,
    y: 40
};

const whileInView = {
    opacity: 1,
    y: 0
};

const transition = {
    duration: 1,
    ease: "easeOut"
};

const ScrollAnimation = ( { className, children } : { className?: string, children: ReactNode } ) => {
    // const ref = useRef<HTMLDivElement | null>(null);

    // const {
    //     scrollYProgress
    // } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"]
    // });
    // const filter = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["blur(0px)", "blur(10px)"]
    // );

    return (
        <Fragment>
            <motion.div
            // ref={ref}
            // style={{filter}}
            className={className}
            initial={initial}
            whileInView={whileInView}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
            >
                {children}
            </motion.div>
        </Fragment>
    );
};

export default ScrollAnimation;