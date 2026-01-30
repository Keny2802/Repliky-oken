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
                        Okna se skutečným vakuovým sklem Fineo od firmy AGC.
                    </Heading>
                    <Subheading>
                        Sklo, které má uvnitř skutečné vakuum existuje, vyrábí jej firma AGC v Belgii. Častým omylem bývá
                        informace o vakuu ve dvojsklech a trojsklech, není tam vakuum ale nejčastěji plyn argon. Fineo je
                        jediné sklo v Evropě, které vakuum má. Jedná se o tenké sklo s lepšími izolačními parametry než
                        trojsklo. Fineo má uvnitř mezeru, kde je vakuum (cca 0,1mm) a aby se nezhroutilo má v ploše
                        malinkaté můstky, které sklo vyztužují. Toto vakuové sklo lze osadit do všech našich oken, máme
                        s ním zkušenosti. Obrovskou výhodou vakuového skla jsou vynikající tepelné a hlukové izolační
                        vlastnosti při zachování tenkého skla, Fineo má sílu 4-8 mm. Nevýhodou je bohužel vysoká cena skla a
                        delší doba dodání.
                    </Subheading>
                    <Wrapper className="mt-2 md:mt-4">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Zde se podívejte
                        </h3>
                        <Link
                        href="https://www.agc-fenestra.cz/produkty-fineo-vakuove-izolacni-sklo"
                        target="_blank"
                        className="text-[#5495ff]">
                            https://www.agc-fenestra.cz/produkty-fineo-vakuove-izolacni-sklo
                        </Link>
                    </Wrapper>
                </FlexCol>
                <Wrapper className="mt-2 md:mt-4 flex justify-center">
                    <Image
                    width={800}
                    height={800}
                    src="/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-1.avif"
                    alt="Ukázka produktu okna se skutečným vakuovým sklem fineo od firmy AGC | replikyoken.cz Jaroslav Heindinger"
                    />
                </Wrapper>
                <FlexRow className="flex-wrap justify-center items-center w-full">
                    {
                        [
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-2.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-3.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-4.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-5.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-6.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-7.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-8.avif"
                        ].map((img, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={200}
                                    height={200}
                                    src={img}
                                    alt={`${index + 1}. Ukázka produktu okna se skutečným vakuovým sklem fineo od firmy AGC | replikyoken.cz Jaroslav Heindinger`}
                                    className="w-full md:w-50 md:h-50 object-cover cursor-pointer rounded-md"
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