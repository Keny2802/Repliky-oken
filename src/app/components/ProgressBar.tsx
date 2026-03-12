"use client";

import React, {
    useState,
    Fragment
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
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const {
        className
    } = props;

    const {
        scrollYProgress
    } = useScroll();
    const progress = [scrollYProgress];

    // const scrollFromEvent = (clientX: number, element: HTMLDivElement) => {
    //     const rect = element.getBoundingClientRect();

    //     const x = clientX - rect.left;
    //     const percent = Math.min(Math.max(x / rect.width, 0), 1);

    //     const scrollHeight = document.body.scrollHeight - window.innerHeight;

    //     window.scrollTo({
    //         top: percent * scrollHeight,
    //         behavior: "smooth"
    //     });
    // };

    const scrollFromEvent = (clientX: number, element: HTMLDivElement) => {
        const body = document.body;
        const rect = element.getBoundingClientRect();

        const x = clientX - rect.left;
        const percent = Math.min(Math.max(x / rect.width, 0), 1);
        const innerHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight - innerHeight;

        console.log("------------------");
        console.log("percent:", percent);
        console.log("innerHeight", innerHeight);
        console.log("Unedited scrollHeight:", body.scrollHeight);
        console.log("Edited ScrollHeight:", scrollHeight);

        window.scrollTo({
            top: percent * scrollHeight,
            behavior: "smooth"
        });
    };

    const handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
        const currentTarget = evt.currentTarget;
        const touch = evt.touches[0];
        
        scrollFromEvent(touch.clientX, currentTarget);
    };

    const handleMouseDown = (evt: React.MouseEvent<HTMLDivElement>) => {
        const clientX = evt.clientX;
        const currentTarget = evt.currentTarget;

        setIsDragging(true);
        scrollFromEvent(clientX, currentTarget);
    };

    const handleMouseMove = (evt: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        
        const clientX = evt.clientX;
        const currentTarget = evt.currentTarget;

        scrollFromEvent(clientX, currentTarget);
    };

    const handleMouseUp = (evt: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(false);
    };

    return (
        <Fragment>
            <motion.div
            style={{
                ...style,
                scaleX: scrollYProgress,
                originX: 0
            }}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={clsx(className, "cursor-grab active:cursor-grabbing progress-bar-component")}
            id="progress-bar"/>
        </Fragment>
    );
};

export default ProgressBar;