"use client"

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "./Wrapper";
import Subheading from "./Subheading";

// type CarouselItemType = {
//     image: string;
//     title?: string;
// };

type CarouselType = {
    // carouselSet: CarouselItemType[];
    carouselSet: string[];
    title?: string;
    startIndex?: number;
    onClose?: () => void;
};

const Carousel = ( { ...props } : CarouselType ) => {
    const {
        carouselSet,
        title,
        startIndex = 0,
        onClose
    } = props;

    const [currentIndex, setCurrentIndex] = useState<number>(startIndex ?? 0)

    useEffect(() => {
        setCurrentIndex(startIndex ?? 0);
    }, [startIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            return (
                prev === carouselSet.length - 1 ? 0 : prev + 1
            );
        });
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => {
            return (
                prev === 0 ? carouselSet.length - 1 : prev - 1
            );
        });
    };

    return (
        <Fragment>
            <Wrapper className="fixed inset-0 min-h-screen z-50 bg-black/30 flex justify-center items-center">
                <Wrapper className="relative w-full max-w-[800px] aspect-square md:aspect-[4/3] overflow-hidden">
                <p className="absolute top-5 left-4 z-50 text-xl md:text-[25px] text-white font-medium mt-2 md:mt-3 lg:mt-4">
                    {currentIndex + 1} / {carouselSet.length}
                </p>
                <button
                className="mt-2 md:mt-3 lg:mt-4 p-1.5 md:p-2 lg:p-2.5 absolute top-5 right-4 bg-black/40 text-white cursor-pointer rounded-full z-50"
                onClick={onClose}>
                    <XMarkIcon className="w-5 h-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </button>
                <button
                className="p-1.5 md:p-2 lg:p-2.5 absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white cursor-pointer rounded-full z-50"
                onClick={previousSlide}>
                    <ChevronLeftIcon className="w-5 h-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </button>
                <button
                className="p-1.5 md:p-2 lg:p-2.5 absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white cursor-pointer rounded-full z-50"
                onClick={nextSlide}>
                    <ChevronRightIcon className="w-5 h-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </button>
                    <div
                    className="w-full h-full flex items-center flex-nowrap transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${100 * currentIndex}%)`
                    }}>
                        {
                            carouselSet.map((carouselItem, index) => {
                                return (
                                    <Wrapper
                                    className="relative w-full h-full shrink-0 flex justify-center"
                                    key={index}>
                                        <Image
                                        fill
                                        // width={800}
                                        // height={800}
                                        src={carouselItem}
                                        alt={title || `${index + 1}. Ukázka práce od replikyoken.cz | Jaroslav Heidinger`}
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        priority={index === currentIndex}
                                        className="object-cover"
                                        />
                                    </Wrapper>
                                );
                            })
                        }
                    </div>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Carousel;