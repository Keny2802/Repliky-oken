"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "./Wrapper";
import FlexCol from "./FlexCol";
import FlexRow from "./FlexRow";
import Icon from "./Icon";

type CarouselItem = {
    image: string;
    heading?: string;
    desc?: string;
};

type CarouselType = {
    carouselSet: CarouselItem[];
};

const Carousel = ({ ...props }: CarouselType) => {
    const {
        carouselSet
    } = props;

    const [currentPhoto, setCurrentPhoto] = useState<number>(0);
    
    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === "ArrowRight") {
                nextSlide();
            };

            if (evt.key === "ArrowLeft") {
                prevSlide();
            };
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const nextSlide = () => {
        setCurrentPhoto(prev => (prev + 1) % carouselSet.length);
    };

    const prevSlide = () => {
        setCurrentPhoto(prev => prev === 0 ? carouselSet.length - 1 : prev - 1);
    };

    return (
        <Fragment>
            <FlexRow className="relative justify-center items-center">
                <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                    <Icon className="cursor-pointer">
                        <ChevronLeftIcon />
                    </Icon>
                </button>
                <button
                onClick={(nextSlide)}
                className="absolute right-0 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                    <Icon className="cursor-pointer">
                        <ChevronRightIcon />
                    </Icon>
                </button>
            </FlexRow>
            <Wrapper className="overflow-hidden w-full max-w-5xl mx-auto">
                <Wrapper
                className="flex transition-transform duration ease-in-out"
                style={{
                    transform: `translateX(-${currentPhoto * 100}%)`
                }}>
                    {
                        carouselSet.map((cardItem, index) => {
                            return (
                                <Fragment
                                key={index}>
                                    <Wrapper className="min-w-full shrink-0 p-2 md:p-3 lg:p-4">
                                        <Wrapper className="overflow-hidden rounded-2xl cursor-pointer w-full max-h-200">
                                            <Image
                                            width={100}
                                            height={100}
                                            src={cardItem.image}
                                            alt={cardItem.heading || "Ukázka práce | Repliky oken Jaroslav Heindinger"}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="w-full max-h-200 object-cover"
                                            />
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Carousel;