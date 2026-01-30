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
                        Jedno rámová okna s izolačním zasklením - trojsklo, dvojsklo
                    </Heading>
                    <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Jedno rámová okna (klasická alternativa eurooken)
                        </h3>
                        <Subheading>
                            Klasické okno, které izoluje tepelně i hlukově. Má úzké profily a tím pouští více světla do místností.
                            Nejedná se o eurookno ale o okno, které lze osadit všude a bude hezky vypadat.
                            Lze osadit do památkově chráněných oblastí jako alternativa špaletového. Z exteriéru přesně kopíruje
                            vzhled špaletového okna, šířky profilů jsou stejné a tím i stejné světlo procházející do místností. Při
                            výměně za špaletové je nutno zednických prací, zednické práce zajistíme.
                        </Subheading>
                        <Subheading>
                            <strong className="strong">
                                Technický údaj:
                            </strong>
                            {" "}
                            síla materiálu pro trojsklo je 70 mm, pro dvojsklo 60 mm. Sílu lze samozřejmě měni dle vašich požadavků.
                        </Subheading>
                    </FlexCol>
                    <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Jedno rámová okna se špaletou (bez vnitřních křídel)
                        </h3>
                        <Subheading>
                            Jednorázové okno lze doplnit špaletou/obložením. Okno vypadá jako špaletové, ale nemá vnitřní
                            křídla, má špaletu neboli obložení. Při výměně za staré špaletové okno
                            {" "}
                            <strong className="strong">
                                není potřeba zednických prací.
                            </strong>
                        </Subheading>
                        <Subheading>
                            Obložení dává oknu vzhled špalety a hluboký vnitřní parapet. Vhodná varianta, když chcete mít hezké okno, více prostoru a nechcete zednické práce se zděním otvoru.
                        </Subheading>
                    </FlexCol>
                </FlexCol>
                <Wrapper className="mt-2 md:mt-4 flex justify-center">
                    <Image
                    width={800}
                    height={800}
                    src="/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-1.avif"
                    alt="Ukázka produktu špaletových oken z replikyoken.cz | Jaroslav Heindinger"
                    />
                </Wrapper>
                <FlexRow className="flex-wrap justify-center items-center w-full">
                    {
                        [
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-2.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-3.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-4.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-5.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-6.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-7.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-8.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-9.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-10.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-11.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-12.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-13.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-14.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-15.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-16.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-17.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-18.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-19.avif",
                            "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim/jednoramova-okna-s-izolacnim-zasklenim-20.avif"
                        ].map((img, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={200}
                                    height={200}
                                    src={img}
                                    alt={`${index + 1}. Ukázka produktu jednorámových oken s izolačním zasklením | replikyoken.cz Jaroslav Heindinger`}
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