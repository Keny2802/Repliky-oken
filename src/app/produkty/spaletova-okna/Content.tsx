import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import Atc from "@/app/sections/Atc";
import Wrapper from "@/app/components/Wrapper";
import FlexCol from "@/app/components/FlexCol";
import FlexRow from "@/app/components/FlexRow";
import Heading from "@/app/components/Heading";
import Subheading from "@/app/components/Subheading";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Subheader />
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <FlexCol className="items-center">
                    <Heading>
                        Špaletová okna
                    </Heading>
                    <Subheading className="md:max-w-5xl">
                        Vycházíme z konstrukce klasického špaletového okna, vyrobeného na přelomu 19. a 20. století, které
                        díky úzkým profilům okenních křídel a rámů propouštělo více světla do místností a na svou dobu
                        mělo velmi dobré izolační vlastnosti. Ruční truhlářská práce je základem naší výroby, nesnažíme se o
                        předělání moderního eurookna do vzhledu klasického, ale o klasické okno, které má skvělé tepelné a
                        hlukové izolační vlastnosti.
                    </Subheading>
                    <ul className="point-lit">
                        <li className="list-disc point-list-item">
                            Naše okna
                            {" "}
                            <strong className="strong">
                                běžně osazujeme v památkově chráněných oblastech.
                            </strong>
                        </li>
                        <li className="list-disc point-list-item">
                            Veškerou komunikaci a
                            {" "}
                            <strong className="strong">
                                dokumentaci potřebnou pro památkový odbor zajistíme!
                            </strong>
                        </li>
                    </ul>
                </FlexCol>
                <Wrapper className="mt-2 md:mt-4 flex justify-center">
                    <Image
                    width={800}
                    height={800}
                    src="/assets/fotky/produkty/spaletova-okna/spaletova-okna-1.avif"
                    alt="Ukázka produktu špaletových oken z replikyoken.cz | Jaroslav Heindinger"
                    />
                </Wrapper>
                <FlexRow className="flex-wrap justify-center items-center w-full">
                    {
                        [
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-1.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-2.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-3.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-4.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-5.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-6.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-7.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-8.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-9.avif",
                            "/assets/fotky/produkty/spaletova-okna/spaletova-okna-10.avif",
                        ].map((img, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={200}
                                    height={200}
                                    src={img}
                                    alt={`${index + 1}. Ukázka produktu špaletových oken | replikyoken.cz Jaroslav Heindinger`}
                                    className="w-full md:w-50 md:h-50 object-cover cursor-pointer rounded-md"
                                    />
                                </Fragment>
                            );
                        })
                    }
                </FlexRow>
                    <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Špaletová okna jsme vylepšili:
                        </h3>
                        <ul className="point-list">
                            {
                                [
                                    "Izolačním zasklením ve venkovních křídlech.",
                                    "Dvojím těsněním ve venkovních křídlech a vnitřním rámu - nebude profukovat.",
                                    "Nástřikem barvy vysokotlakým stříkacím zařízením pro dlouhou životnost povrchu.",
                                    "Panty, které lze jednoduše štelovat - křídla nebudou drhnout.",
                                ].map((point, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <li className="list-disc point-list-item">
                                                {point}
                                            </li>
                                        </Fragment>
                                    );
                                })
                            }
                        </ul>
                </FlexCol>
                <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Špaletová okna umíme vyrobit podle vašich přání a požadavků, lze osadit:
                        </h3>
                        <ul className="point-list">
                            {
                                [
                                    "Trojsklo pro lepší izolaci tepelnou a hlukovou.",
                                    "Izolační sklo i do vnitřních křídel.",
                                    "Bezpečnostní lepení sklo.",
                                    "Otevírání křídel jednou kličkou místo dvěma s pomocí zavírací lišty.",
                                    "Vyklápění vrchních křídel ovládací pákou."
                                ].map((point, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <li className="list-disc point-list-item">
                                                {point}
                                            </li>
                                        </Fragment>
                                    );
                                })
                            }
                            <li className="list-disc point-list-item">
                                Matné sklo či speciální čistě průhledné sklo Clearvision od firmy AGC.
                                <Link
                                href="https://www.agc-yourglass.com/cz-CZ/nase-znacky/planibel-clearvision"
                                target="_blank"
                                className="block text-[#5495ff]">
                                    https://www.agc-yourglass.com/cz-CZ/nase-znacky/planibel-clearvision
                                </Link>
                            </li>
                        </ul>
                </FlexCol>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;