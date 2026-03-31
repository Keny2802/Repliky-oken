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
import Flex from "../components/Flex";
import Img from "../components/Img";

const BeforeAndAfter = () => {
    const [isSliderPosition, setSliderPosition] = useState<number>(50);
    const [isSliderDragging, setSliderDragging] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        if (!isSliderDragging) return;

        if (index) {
            const currentTarget = event.currentTarget;
            const rect = currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
            const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

            setSliderPosition(percent);
            setActiveIndex(index);
        };
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>, index: number) => {
        if (!isSliderDragging) return;

        const currentTarget = event.currentTarget;
        const rect = currentTarget.getBoundingClientRect();
        const touch = event.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
        setActiveIndex(index);
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
                            <Wrapper className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 items-center">
                                {
                                    [
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-1.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-1.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-2.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-2.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-3.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-3.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-4.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-4.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-5.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-5.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                        {
                                            beforeSrc: "/assets/fotky/pred-a-po/pred/pred-6.avif",
                                            beforeAlt: "před realizací - replikyoken.cz | Jaroslav Heidinger",
                                            
                                            afterSrc: "/assets/fotky/pred-a-po/po/po-6.avif",
                                            afterAlt: "po realizaci - replikyoken.cz | Jaroslav Heidinger"
                                        },
                                    ].map((slide, idx) => {
                                        const {
                                            beforeSrc,
                                            beforeAlt,
                                            afterSrc,
                                            afterAlt
                                        } = slide;

                                        return (
                                            <Fragment key={idx}>
                                                <div
                                                // onMouseUp={handleMouseUp}
                                                // onMouseUp={handleMouseUp}
                                                className="w-full relative">
                                                    <div
                                                    onMouseMove={(e) => handleMove(e, idx)}
                                                    onMouseDown={handleMouseDown}
                                                    onMouseUp={handleMouseUp}
                                                    onTouchMove={(e) => handleTouchMove(e, idx)}
                                                    onTouchStart={handleTouchStart}
                                                    onTouchEnd={handleTouchEnd}
                                                    className="w-full max-w-[700px] relative aspect-[4/3] m-auto select-none rounded-3xl">
                                                        <Img
                                                        fill={true}
                                                        // priority={true}
                                                        src={beforeSrc}
                                                        alt={`${idx + 1}. Ukázka ${beforeAlt}`}
                                                        className="rounded-3xl object-cover"
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
                                                            src={afterSrc}
                                                            alt={`${idx + 1}. Ukázka ${afterAlt}`}
                                                            className="rounded-3xl object-cover"
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
                                            </Fragment>
                                        );
                                    })
                                }
                            </Wrapper>
                        </MarginTop>
                    </Wrapper>
                </ScrollAnimation>
            </Wrapper>
        </Fragment>
    );
};

export default BeforeAndAfter;