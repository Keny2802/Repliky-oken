"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    Gallery as gal
} from "../galerie/Gallery";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Carousel from "../components/Carousel";

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const body = document.body;

        if (activeIndex !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [activeIndex]);

    return (
        <Fragment>
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <ScrollAnimation>
                    <FlexCol className="items-center">
                        <Heading>
                            Fotogalerie
                        </Heading>
                        <Subheading>
                            Fotogalerie realizací našich klientů.
                        </Subheading>
                    </FlexCol>
                    <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                        {
                            gal.map((card, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Image
                                        width={300}
                                        height={300}
                                        src={card.image}
                                        alt={card.alt || `${index + 1}. Ukázka realizace replikyoken.cz Jaroslav Heindinger`}
                                        draggable={false}
                                        className="w-full max-h-[210px] md:w-50 md:h-50 object-cover rounded-md cursor-pointer"
                                        onClick={() => setActiveIndex(index)}
                                        />
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                </ScrollAnimation>
            </Wrapper>
            {
                activeIndex !== null && (
                    <Fragment>
                        <Carousel
                        carouselSet={gal.map((item) => item.image)}
                        startIndex={activeIndex}
                        onClose={() => setActiveIndex(null)}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Gallery;