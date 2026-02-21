"use client";

import {
    useState,
    Fragment,
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Img from "./Img";

type ImgPlaceholderType = {
    fill?: boolean,
    width?: number,
    height?: number,
    src: string;
    alt: string;
    className?: string;
};

const ImgPlaceholder = ({ ...props }: ImgPlaceholderType) => {
    const {
        fill,
        width,
        height,
        src,
        alt,
        className
    } = props;
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    return (
        <Fragment>
            <Wrapper className="relative w-full h-full">
                {
                    !isLoaded && !error && (
                        // <Wrapper className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></Wrapper>
                        <Wrapper className="blur-lg scale-105 transition-colors duration-500 ease-in-out"></Wrapper>
                    )
                }
                <Img
                {
                    ...(
                        fill ? ({
                            fill: true
                        }) : ({
                            width: width,
                            height: height
                        })
                    )
                }
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                // className={clsx(isLoaded ? "blur-none scale-100" : "blur-lg scale-105", "transition-colors duration-500 ease-in-out image-placeholder-component", className)}
                className={clsx(className, "image-placeholder-component")}
                />
            </Wrapper>
        </Fragment>
    );
};

export default ImgPlaceholder;