import {
    Fragment
} from "react";
import Image from "next/image";

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
                        Interiérová dveře
                    </Heading>
                    <Subheading className="md:max-w-5xl">
                        Věrné repliky klasických a historických dřevěných kazetových a prosklených dveří všech druhů se
                        zárubní. Technologie naší výroby dveří je založena na pevné konstrukci dveřního rámu. Spoje zásadně provádíme vyklínovaným čepem a dlabem tak, jak to dělali mistři truhláři při výrobě Vašich
                        původních dveří. Žádné kolíčky ve spojích nedáváme, takový spoj není kvalitní, jen byl rychle
                        vyrobený. Pevná konstrukce zajišťuje velmi dlouhou životnost.
                        <span className="block mt-2">
                            Vaše stávající dveře přesně zaměříme, případně odvezeme vzorek abychom docílili co nejpřesnější
                            repliky. Pokud máte stávající dveřní kování, lze repasovat a osadit na nové dveře.
                        </span>
                    </Subheading>
                    <ul className="point-list">
                        {
                            [
                                "Kazetové dveře a dveře s částečným zasklením.",
                                "Dvoukřídlé dveře.",
                                "Posuvné dveře jednokřídlé či dvoukřídlé.",
                                "Dveřní zárubeň obložková se zdobením nebo jednoduchá truhlářská.",
                                "Zasklení matným sklem či sklem se vzorkem.",
                                "Zasklení fazetovým sklem.",
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
                <Wrapper className="mt-2 md:mt-4 flex justify-center">
                    <Image
                    width={800}
                    height={800}
                    src="/assets/fotky/produkty/interierove-dvere/interierove-dvere-1.avif"
                    alt="Ukázka produktu špaletových oken z replikyoken.cz | Jaroslav Heindinger"
                    />
                </Wrapper>
                <FlexRow className="flex-wrap justify-center items-center w-full">
                    {
                        [
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-2.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-3.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-4.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-5.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-6.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-7.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-8.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-9.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-10.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-11.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-12.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-13.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-14.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-15.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-16.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-17.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-18.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-19.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-20.avif",
                            "/assets/fotky/produkty/interierove-dvere/interierove-dvere-21.avif",
                        ].map((img, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={200}
                                    height={200}
                                    src={img}
                                    alt={`${index + 1}. Ukázka produktu interiérových dveřích | replikyoken.cz Jaroslav Heindinger`}
                                    className="md:w-50 md:h-50 object-cover cursor-pointer rounded-md"
                                    />
                                </Fragment>
                            );
                        })
                    }
                    </FlexRow>
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;