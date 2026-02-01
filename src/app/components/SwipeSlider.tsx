// "use client";

// import {
//     useState,
//     Fragment
// } from "react";
// import Image from "next/image";

// import Wrapper from "./Wrapper";

// // type imageType = {
// //     image: string;
// //     heading?: string;
// // };

// // type SwipeSliderType = {
// //     images: imageType[];
// // };

// // type initialType = {
// //     images: imageType[];
// // };

// type SwipeSliderType = {
//     images: string[];
//     currentIndex: number;
//     setCurrentIndex: (index: number) => void;
//     onClose: () => void;
// };

// const SwipeSlider = ( { ...props } : SwipeSliderType ) => {
//     const {
//         images,
//         currentIndex,
//         setCurrentIndex,
//         onClose
//     } = props;

//     const nextSlide = () => {
//         setCurrentIndex(
//             Math.min(currentIndex + 1, images.length - 1)
//         );
//     };

//     const previousSlide = () => {
//         setCurrentIndex(
//             Math.max(currentIndex - 1, 0)
//         )
//     };

//     return (
//         <Fragment>
//             <Wrapper className="fixed inset-0 z-50 bg-black/50 overflow-hidden">
//                 <Wrapper
//                 className="absolute inset-0"
//                 onClick={onClose}></Wrapper>
//                 <Wrapper className="relative overflow-hidden">
//                     <Wrapper
//                     className="h-full flex cursor-grab transition-transform duration-300 ease-in-out active:cursor-grabbing"
//                     // style={{ "--slide-index": startIndex } as React.CSSProperties}
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                     >
//                         {
//                             images.map((img, index) => {
//                                 return (
//                                     <Fragment key={index}>
//                                         <Image
//                                         // fill
//                                         width={800}
//                                         height={800}
//                                         src={img}
//                                         priority={index === currentIndex}
//                                         alt={`${index + 1}. Ukázka práce realizace firmy replikyoken.cz | Jaroslav Heidinger`}
//                                         className="aspect-video w-screen shrink-0 bg-neutral-800 object-cover"
//                                         />
//                                     </Fragment>
//                                 );
//                             })
//                         }
//                     </Wrapper>
//                 </Wrapper>
//             </Wrapper>
//         </Fragment>
//     );
// };

// // const Images = ( { ...props } : SwipeSliderType) => {
// //     const {
// //         images
// //     } = props;

// //     return (
// //         <Fragment>
// //             {
// //                 images.map((img, index) => {
// //                     return (
// //                         <Image
// //                         key={index}
// //                         src={img.image}
// //                         alt={`${index + 1}. Ukázka práce realizace firmy replikyoken.cz | Jaroslav Heidinger`}
// //                         />
// //                     );
// //                 })
// //             }
// //         </Fragment>
// //     );
// // };

// export default SwipeSlider;

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
import Subheading from "./Subheading";
import Icon from "./Icon";

type SwipeSliderItem = {
    image: string;
    heading?: string;
    desc?: string;
};

type SwipeSliderType = {
    swipeSliderSet: SwipeSliderItem[];
    startIndex?: number;
    onClose?: () => void;
};

const SwipeSlider = ({ ...props }: SwipeSliderType) => {
    const {
        swipeSliderSet,
        startIndex = 0,
        onClose
    } = props;

    // const [currentPhoto, setCurrentPhoto] = useState<number>(0);
    const [currentPhoto, setCurrentPhoto] = useState<number>(startIndex ?? 0);
    const [isMobile, setMobile] = useState<boolean>(false);
    
    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === "Escape" && onClose) {
                onClose();
            };

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

    useEffect(() => {
        const checkScreen = () => {
            setMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    useEffect(() => {
        setCurrentPhoto(startIndex);
    }, [startIndex]);

    const nextSlide = () => {
        setCurrentPhoto(prev => (prev + 1) % swipeSliderSet.length);
    };

    const prevSlide = () => {
        setCurrentPhoto(prev => prev === 0 ? swipeSliderSet.length - 1 : prev - 1);
    };

    return (
        <Fragment>
            <Wrapper>
                <Subheading className="absolute top-4 md:top-6 left-4 md:left-6 text-white">
                    {currentPhoto + 1} / {swipeSliderSet.length}
                </Subheading>
                <Wrapper className="relative overflow-hidden">
                    <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full focus:outline-none">
                        <Icon className="cursor-pointer">
                            <ChevronLeftIcon />
                        </Icon>
                    </button>
                    <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full focus:outline-none">
                        <Icon className="cursor-pointer">
                            <ChevronRightIcon />
                        </Icon>
                    </button>
                    <Wrapper
                    className="flex transition-transform duration ease-in-out"
                    style={{
                        transform: `translateX(-${currentPhoto * 100}%)`
                    }}>
                        {
                            swipeSliderSet.map((cardItem, index) => {
                                return (
                                    <Fragment
                                    key={index}>
                                        <Image
                                        width={1400}
                                        height={1000}
                                        src={cardItem.image}
                                        alt={`${index + 1}. Ukázka práce realizace firmy replikyoken.cz | Jaroslav Heidinger`}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        quality={90}
                                        className="w-auto max-h-[90h] shrink-0 object-contain"
                                        />
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default SwipeSlider;