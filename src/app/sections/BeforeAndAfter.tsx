"use client";

import React, {
    useState,
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import MarginTop from "../components/MarginTop";
import Img from "../components/Img";

const BeforeAndAfter = () => {
    const [isSliderPosition, setSliderPosition] = useState<number>(50);
    const [isSliderDragging, setSliderDragging] = useState<boolean>(false);

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isSliderDragging) return;

        const currentTarget = event.currentTarget;
        const rect = currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isSliderDragging) return;

        const currentTarget = event.currentTarget;
        const rect = currentTarget.getBoundingClientRect();
        const touch = event.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setSliderDragging(true);
    };

    const handleMouseUp = () => {
        setSliderDragging(false);
    };

    const handleTouchStart = () => setSliderDragging(true);

    const handleTouchEnd = () => setSliderDragging(false);

    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-8 border-t border-gray-200 bg-white shadow-lg">
                <ScrollAnimation>
                    <Wrapper>
                        <FlexCol className="justify-center items-center">
                            <Heading>
                                Před a Po
                            </Heading>
                            <Subheading className="max-w-3xl">
                                Podívejte se na naše realizace jak vypadaly a jak vypadají teď po naší kvalitní práci.
                            </Subheading>
                        </FlexCol>
                        <MarginTop>
                            <div
                            // onMouseUp={handleMouseUp}
                            // onMouseUp={handleMouseUp}
                            className="w-full relative">
                                <div
                                onMouseMove={handleMove}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onTouchMove={handleTouchMove}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                className="w-full max-w-[700px] relative aspect-[4/3] m-auto select-none rounded-3xl">
                                    <Img
                                    fill={true}
                                    // priority={true}
                                    src="/assets/fotky/pred-a-po/pred/pred-4.avif"
                                    alt="Realizace replikyoken.cz interiérový dveřích - obrázek před realizací"
                                    className="rounded-3xl"
                                    />
                                    <Wrapper className="relative">
                                        <Heading className="absolute top-5 left-5 text-white uppercase">
                                            {/* Před realizací */}
                                            Před
                                        </Heading>
                                    </Wrapper>
                                    <div
                                    style={{
                                        clipPath: `inset(0 ${100 - isSliderPosition}% 0 0)`
                                    }}
                                    className="absolute top-0 right-0 left-0 w-full max-w-[700px] aspect-[4/3] m-auto overflow-hidden select-none">
                                        <Img
                                        fill={true}
                                        // priority={true}
                                        src="/assets/fotky/pred-a-po/po/po-4.avif"
                                        alt="Realizace replikyoken.cz interiérový dveřích - obrázek po realizaci"
                                        className="rounded-3xl"
                                        />
                                        <Wrapper className="relative">
                                            <Heading className="absolute top-5 right-5 text-white uppercase">
                                                {/* Po realizaci */}
                                                Po
                                            </Heading>
                                        </Wrapper>
                                    </div>
                                    <div 
                                    style={{
                                        left: `calc(${isSliderPosition}% - 1px)`
                                    }}
                                    className="absolute top-0 bottom-0 w-1 bg-white cursor-grab active:cursor-grabbing">
                                        <div className="h-3 w-3 bg-white absolute -left-1 top-[calc(50%-5px)] rounded-full " />
                                    </div>
                                </div>
                            </div>
                        </MarginTop>
                    </Wrapper>
                </ScrollAnimation>
            </Wrapper>
        </Fragment>
    );
};

export default BeforeAndAfter;