"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    CheckIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import HeroHeading from "../components/HeroHeading";
import Subheading from "../components/Subheading";
import MarginTop from "../components/MarginTop";
import Flex from "../components/Flex";
import Cta from "../components/Cta";
import Padding from "../components/Padding";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import { button } from "motion/react-client";
import DottedButton from "../components/DottedButton";

const HeroCarousel = [
    {
        image: "/assets/fotky/reference/praha-ulice-rybna-repliky-oken/praha-ulice-rybna-repliky-oken-17.avif",
        alt: "Praha 1 ulice Rybná, repliky oken v památkově chráněném domě realizováno společností Repliky Oken",
        title: "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme"
    },
    {
        image: "/assets/fotky/reference/jednoramova-okna-praha-ulice-nerudova/jednoramova-okna-praha-ulice-nerudova-11.avif",
        alt: "Jednorámová okna realizováno na Praze 1 ulice Nerudová společností Repliky Oken",
        title: "Rekonstrukce bytů - výměna všech výplní otvorů"
    },
    {
        image: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif",
        alt: "Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger",
        title: "Repliky oken a dveří v historických vilách a domech"
    },
    {
        image: "/assets/fotky/reference/lomena-okna-praha-zizkov/lomena-okna-praha-zizkov-7.avif",
        alt: "Lomená okna realizace Praha 3-Žižkov spolešností Repliky Oken",
        title: "Okna v činžovních domech v památkových oblastech"
    }
];

const Hero = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
    const [carouselFade, setCarouselFade] = useState<boolean>(false);
    const card = HeroCarousel[currentPhotoIndex];
    
    const SLIDE_DURATION = 8000;
    const FADE_DURATION = 500;

    useEffect(() => {
        const carouselTimeout = setTimeout(() => {
            setCarouselFade(true);

            const switchCarouselTimeout = setTimeout(() => {
                setCurrentPhotoIndex(prev => (prev + 1) % HeroCarousel.length);
                setCarouselFade(false);
            }, FADE_DURATION);

            return () => {
                clearTimeout(switchCarouselTimeout);
            };
        }, SLIDE_DURATION);

        return () => {
            clearTimeout(carouselTimeout);
        };
    }, [currentPhotoIndex]);

    return (
        <Fragment>
            <Wrapper className="relative">
                <Image
                width={800}
                height={800}
                src={card.image}
                alt={card.alt}
                draggable={false}
                className={`w-full min-h-[600px] max-h-[800px] bg-fixed bg-center object-cover transition-opacity duration-500 ease-in-out ${carouselFade ? "opacity-0" : "opacity-100"}`}
                />
                <Wrapper className="absolute inset-0 bg-black/15"></Wrapper>
                <Wrapper className="p-3 md:p-3.5 lg:p-4 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3.5 lg:gap-6">
                    <ScrollAnimation className="flex justify-center items-center flex-col gap-2 md:gap-4 lg:gap-6">
                       <Wrapper className={`${carouselFade ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>
                            <HeroHeading>
                                Repliky historických oken a dveří
                            </HeroHeading>
                            <Wrapper className="flex items-center flex-col gap-3 md:gap-3.5 lg:gap-4">
                                <Flex>
                                    <CheckIcon className="w-8 md:w-9 lg:w-12 h-8 md:h-9 lg:h-12 text-[#f5f2e8]" />
                                    <Wrapper>
                                        <p className="text-xl md:text-2xl lg:text-[26px] font-medium">
                                            {card.title}
                                        </p>
                                    </Wrapper>
                                </Flex>
                            </Wrapper>
                            <MarginTop>
                                <Flex className="w-full justify-center md:flex-row flex-col gap-3">
                                    {
                                        [
                                            {
                                                text: "Mrknout na realizace",
                                                href: "/nase-realizace"
                                            },
                                            {
                                                text: "Podívat se na špaletová okna",
                                                href: "/produkty/spaletova-okna"
                                            }
                                        ].map((heroCta, index) => {
                                            return (
                                                <Fragment key={index}>
                                                   {
                                                    index !== 1 ? (
                                                         <Cta
                                                    href={heroCta.href}
                                                    {
                                                        ...(
                                                            !heroCta.href.startsWith("/") && (
                                                                {
                                                                    onClick: (e) => setLinkWithoutHash(e, heroCta.href)
                                                                }
                                                            )
                                                        )
                                                    }
                                                    className="w-full bg-[#f5f2e8] text-black last:bg-transparent last:text-white last:border last:border-[#f5f2e8] last:hover:bg-[#f5f2e8] last:hover:text-black transition-colors duration-300 ease-in-out"
                                                    // className="bg-[#f5f2e8] text-black transition-colors duration-300 ease-in-out"
                                                    >
                                                        <Padding>
                                                            {heroCta.text}
                                                        </Padding>
                                                    </Cta>
                                                    ) : (
                                                        <DottedButton
                                                        href={heroCta.href}
                                                        className="block w-full mt-3">
                                                            {heroCta.text}
                                                        </DottedButton>
                                                    )
                                                   }

                                                </Fragment>
                                            );
                                        })
                                    }
                                </Flex>
                            </MarginTop>
                            <MarginTop className="lg:mt-12">
                                <Flex className="justify-center">
                                    {
                                        HeroCarousel.map((_, index) => {
                                            return (
                                            <button
                                            key={index}
                                            aria-label={`${index + 1}. Ukázka realizace`}
                                            // onClick={() => {setCurrentPhotoIndex(prev => (prev + 1) % HeroCarousel.length)}}
                                            onClick={() => {
                                                setCarouselFade(true);

                                                const timeOut = setTimeout(() => {
                                                    setCurrentPhotoIndex(index);
                                                    setCarouselFade(false);
                                                }, FADE_DURATION);

                                                return () => {
                                                    clearTimeout(timeOut);
                                                };
                                            }}
                                            className={`
                                            ${currentPhotoIndex === index ?
                                                "w-8 bg-[#87ceeb] hover:bg-white"
                                                // "w-8 bg-[#e40209]"
                                                : "bg-white"
                                            }    
                                            w-5 h-5 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#87ceeb]`}
                                            />
                                            );
                                        })
                                    }
                                </Flex>
                            </MarginTop>
                       </Wrapper>
                    </ScrollAnimation>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;