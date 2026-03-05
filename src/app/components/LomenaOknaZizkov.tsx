"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    GalleryZizkov
} from "../nase-realizace/GalleryZizkov";
import Image from "next/image";

import Wrapper from "./Wrapper";
import SectionHeading from "./SectionHeading";

const LomenaOknaZizkov = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const body = document.body;
        
        if (activeIndex !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }

        return () => {
            body.style.overflow = "";
        };
    }, [activeIndex]);
    
    return (
        <Fragment>
            <Wrapper>
                <SectionHeading>
                    Lomená okna Praha Žižkov
                </SectionHeading>
                <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                    {
                        GalleryZizkov.map((card, index) => {
                            const titleIndex = index + 1;
                            
                            return (
                                <Fragment key={index}>
                                    <Wrapper className="relative group cursor-pointer">
                                        <Image
                                        width={300}
                                        height={300}
                                        src={card.image}
                                        alt={card.alt}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="w-full md:w-75 md:h-75 object-cover rounded-md cursor-pointer"
                                        // onClick={() => setActiveCarousel({ gallery: "lomenaOknaZizkov", index: index })}
                                        />
                                        <Wrapper className="rounded-md bg-black/50 text-white absolute inset-0 flex justify-center items-center text-center p-2 md:p-3 lg:p-4 md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            <p className="text-base md:text-lg lg:text-xl font-medium">
                                                {`${titleIndex}. Ukázka - ${card.title}`}
                                            </p>
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

export default LomenaOknaZizkov;