"use client";

import {
    Fragment,
    useState
} from "react";
import {
    motion,
    useScroll
} from "motion/react";
import clsx from "clsx";

type ProgressBarType = {
    className?: string;
};

const style:React.CSSProperties = {
    zIndex: 50,
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    height: 12,
    margin: 5,
    background: "#87ceeb",
    borderRadius: 50
};

const ProgressBar = ({ ...props }: ProgressBarType) => {
    const {
        className
    } = props;

    const {
        scrollYProgress
    } = useScroll();

    const progress = [scrollYProgress];

    return (
        <Fragment>
            <motion.div
            style={{
                ...style,
                scaleX: scrollYProgress,
                originX: 0
            }}
            className={clsx(className, "progress-bar-component")}
            id="progress-bar"/>
        </Fragment>
    );
};

export default ProgressBar;