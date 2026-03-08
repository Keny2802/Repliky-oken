"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    CheckIcon,
} from "@heroicons/react/24/solid";
import {
    StarIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import ScrollAnimation from "../components/ScrollAnimation";
import HeroHeading from "../components/HeroHeading";
import Subheading from "../components/Subheading";
import MarginTop from "../components/MarginTop";
import Flex from "../components/Flex";
import Cta from "../components/Cta";
import Padding from "../components/Padding";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Img from "../components/Img";
import BodyText from "../components/BodyText";
import WAContact from "../components/WAContact";

const HeroCarousel = [
    {
        // image: "/assets/fotky/reference/praha-ulice-rybna-repliky-oken/praha-ulice-rybna-repliky-oken-17.avif",
        image: "/assets/fotky/reference/praha-ulice-rybna-repliky-oken/praha-ulice-rybna-repliky-oken-18.avif",
        alt: "Praha 1 ulice Rybná, repliky oken v památkově chráněném domě realizováno společností Repliky Oken",
        // title: "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme"
        title: [
            "Vyrábíme s respektem k řemeslu.",
            "Podle přání zákazníka.",
            "Repliky oken se skvělou tepelnou a zvukovou izolací."
        ]
    },
    {
        image: "/assets/fotky/reference/jednoramova-okna-praha-ulice-nerudova/jednoramova-okna-praha-ulice-nerudova-11.avif",
        alt: "Jednorámová okna realizováno na Praze 1 ulice Nerudová společností Repliky Oken",
        // title: "Rekonstrukce bytů - výměna všech výplní otvorů",
        title: [
            "Vyrábíme s respektem k řemeslu.",
            "Podle přání zákazníka.",
            "Repliky oken se skvělou tepelnou a zvukovou izolací."
        ]
    },
    {
        image: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif",
        alt: "Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger",
        // title: "Repliky oken a dveří v historických vilách a domech",
        title: [
            "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme.",
            "Rekonstrukce bytů - výměna všech výplní otvorů.",
            "Repliky oken a dveří v historických vilách a domech.",
            "Okna v činžovních domech v památkových oblastech."
        ]
    },
    {
        image: "/assets/fotky/reference/lomena-okna-praha-zizkov/lomena-okna-praha-zizkov-7.avif",
        alt: "Lomená okna realizace Praha 3-Žižkov spolešností Repliky Oken",
        // title: "Okna v činžovních domech v památkových oblastech",
        title: [
            "Jsme specialisté na výměnu oken v památkových oblastech, povolení pro výměnu zajišťujeme.",
            "Rekonstrukce bytů - výměna všech výplní otvorů.",
            "Repliky oken a dveří v historických vilách a domech.",
            "Okna v činžovních domech v památkových oblastech."
        ]
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
            <Wrapper
            className="relative"
            id="uvod">
                <Image
                width={800}
                height={800}
                src={card.image}
                alt={card.alt}
                draggable={false}
                className={`w-full min-h-[600px] max-h-[800px] bg-fixed bg-center object-cover transition-opacity duration-500 ease-in-out ${carouselFade ? "opacity-0" : "opacity-100"}`}
                />
                <Wrapper className="absolute inset-0 bg-black/40"></Wrapper>
                <Wrapper className="p-3 md:p-3.5 lg:p-6 text-white text-center absolute inset-0 flex justify-center items-center flex-col gap-3 md:gap-3.5 lg:gap-6">
                    <ScrollAnimation className="flex justify-center items-center flex-col gap-2 md:gap-4 lg:gap-6">
                       <Wrapper className={`${carouselFade ? "opacity-0" : "opacity-100"} transition-opacity duration-500 ease-in-out`}>
                            <HeroHeading>
                                Repliky historických oken a dveří
                            </HeroHeading>
                            <Wrapper className="mt-2 flex items-center flex-col gap-1.5">
                                {
                                            card.title.map((title, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <Wrapper className="flex items-center gap-1">
                                                            <CheckIcon className="w-8 h-8 text-[#f5f2e8]" />
                                                            <p
                                                            className="text-base md:text-xl max-w-3xl">
                                                                {title}
                                                            </p>
                                                        </Wrapper>
                                                    </Fragment>
                                                );
                                            })
                                        }
                            </Wrapper>
                            <MarginTop>
                                <Flex className="w-full justify-center md:flex-row flex-col gap-3">
                                    {
                                        [
                                            // {
                                            //     text: "Mrknout na realizace",
                                            //     href: "/nase-realizace"
                                            // },
                                            // {
                                            //     text: "Podívat se na špaletová okna",
                                            //     href: "/produkty/spaletova-okna"
                                            // }
                                            {
                                                text: "Podívat se na realizace",
                                                href: "/nase-realizace"
                                            },
                                            {
                                                text: "Podívat se na recenze",
                                                href: "//1url.cz/BeeLq"
                                            },
                                            {
                                                text: "Získat nabídku",
                                                href: "kontakt"
                                            }
                                        ].map((heroCta, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    <Cta
                                                    href={heroCta.href}
                                                    {
                                                        ...(
                                                            !heroCta.href.startsWith("/") ? (
                                                                {
                                                                    onClick: (e) => setLinkWithoutHash(e, heroCta.href)
                                                                }
                                                            ) : {
                                                                target: "_blank"
                                                            }
                                                        )
                                                    }
                                                    // {
                                                    //     ...(
                                                    //         !heroCta.href.startsWith("/") || !heroCta.href.startsWith("https://") && {
                                                    //             target: "_blank"
                                                    //         }
                                                    //     )
                                                    // }
                                                    // className="w-full bg-[#f5f2e8] text-black last:bg-transparent last:text-white last:border last:border-[#f5f2e8] last:hover:bg-[#f5f2e8] last:hover:text-black transition-colors duration-300 ease-in-out"
                                                    className="w-full odd:bg-[#f5f2e8] odd:text-black even:bg-[#87ceeb] even:text-white transition-colors duration-300 ease-in-out"
                                                    // className="bg-[#f5f2e8] text-black transition-colors duration-300 ease-in-out"
                                                    >
                                                        <Padding>
                                                            {heroCta.text}
                                                        </Padding>
                                                    </Cta>
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
                            <MarginTop>
                                <Link
                                href="https://1url.cz/BeeLq"
                                target="_blank">
                                    <Flex className="absolute bottom-4 left-4">
                                        <Img
                                        width={45}
                                        height={45}
                                        src="/assets/google.svg"
                                        alt="Google ikonka"
                                        />
                                        <Flex>
                                            <BodyText className="font-medium">
                                                5,0
                                            </BodyText>
                                            <Flex>
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                            </Flex>
                                            <BodyText className="font-medium">
                                                16 recenzí
                                            </BodyText>
                                        </Flex>
                                    </Flex>
                                </Link>
                            </MarginTop>
                       </Wrapper>
                    </ScrollAnimation>
                </Wrapper>
            </Wrapper>
            <WAContact />
        </Fragment>
    );
};

export default Hero;