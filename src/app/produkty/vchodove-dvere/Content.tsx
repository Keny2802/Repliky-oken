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
                        Vchodové dveře do bytů
                    </Heading>
                    <Subheading className="md:max-w-5xl">
                        <span className="block mt-2">
                            Repliky vchodových dveří do bytu vyrábíme s tepelnou a hlukovou izolací a zabezpečením.
                        </span>
                        Technologie naší výroby je založena na pevné konstrukci dveřního rámu stejně jako u interiérových
                        dveří. Spoje zásadně provádíme vyklínovaným čepem a dlabem tak, jak to dělali mistři truhláři při
                        výrobě Vašich původních dveří. Pevná konstrukce zajišťuje velmi dlouhou životnost.
                    </Subheading>
                    <ul className="point-list">
                        {
                            [
                                "Zesílená konstrukce dveří až 70 mm pro zvukovou a tepelnou izolaci.",
                                "Vícebodový bezpečnostní dveřní zámek MACO.",
                                "Bezpečnostní dveřní kování (klika).",
                                "Masivní dveřní kazety nebo kazety s polyuretanovou vložkou (PUR výplně) pro tepelnou.",
                                "izolaci a odlehčení.",
                                "Bezpečnostní zasklení lepeným sklem (connex).",
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
                    src="/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-1.avif"
                    alt="Ukázka produktu špaletových oken z replikyoken.cz | Jaroslav Heindinger"
                    />
                </Wrapper>
                <FlexRow className="flex-wrap justify-center items-center w-full">
                    {
                        [
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-2.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-3.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-4.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-5.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-6.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-7.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-8.avif",
                            "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-9.avif",
                        ].map((img, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={200}
                                    height={200}
                                    src={img}
                                    alt={`${index + 1}. Ukázka produktu vchodových dveří | replikyoken.cz Jaroslav Heindinger`}
                                    className="md:w-50 md:h-50 object-cover cursor-pointer rounded-md"
                                    />
                                </Fragment>
                            );
                        })
                    }
                    </FlexRow>
                    {/* <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Jak celá akce proběhne a jaká je cena?
                        </h3>
                        <Wrapper className="max-w-7xl">
                            <Subheading>
                                Při výrobě replik oken a dveří je každý výrobek individuální a tím i cena. Kontaktujte nás a zpracujeme
                                Vám cenovou nabídku pro vaše dílo podle vašich požadavků a přání. (KONTAKT)
                                U oken platí, že nejdražší varianta jsou špaletová okna, která mají nejlepší hlukovou i tepelnou izolaci.
                                Levnější alternativa špaletových oken jsou jedno rámová okna, které lze doplnit obložením.
                            </Subheading>
                            <Subheading>
                                Všechny montáže našich výrobků děláme my sami bez externích pracovníků. Tím můžeme zaručit
                                dohled nad kvalitní a správnou montáží našich výrobků.
                            </Subheading>
                            <Subheading>
                                Montáže děláme včetně všech doplňkových prací - zajistíme odvoz odpadu a zednické práce.
                            </Subheading>
                            <Subheading>
                                Lze objednat také kompletní úklid bytu, malířské práce či fasádní barvu. Tyto vícepráce už jsou od
                                externí úklidové firmy a malířů.
                            </Subheading>
                        </Wrapper>
                </FlexCol>
                <FlexCol className="mt-2 md:mt-4 lg:mt-6 justify-center items-center">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Běžný průběh samotné montáže oken:
                        </h3>
                        <ul className="point-list">
                            {
                                [
                                    "Termín bude předem dohodnut, aby vyhovoval zákazníkovi a my měli dílo připravené na osazení.",
                                    "Během bouracích pracích při demontáži starých oken bude hodně prachu a nepořádku. Je potřeba s tím počítat a místnosti, kde budou okna osazována je potřeba patřičně připravit. Přípravu místností si může zákazník zajistit sám nebo celou přípravu můžeme zajistit my a budete mít méně starostí.",
                                    "Jako první je potřeba zpřístupnit prostor před okny zhruba 2 metry před okno, pokud to místnost dovoluje. Nábytek je potřeba zakrýt malířskou folií, aby na nej nesedl prach. Pokud máte obrazy, je lepší je sundat a dát jinam. Lustry, pokud jsou členité, je nejlepší je také zakrýt průsvitnou folií. Podlahu standardně zakrýváme my, a to stavebním linem a folií, aby nedošlo k poškození podlahové krytiny.",
                                    "Při výměně oken vždy v den, kdy se okno demontuje osadí se nové. Nikdy nebudete dlouhou dobu čipřes noc bez oken.",
                                    "Úklid po montáži děláme běžně nahrubo. Uklidíme a odvezeme veškerý odpad, podlahy vysajeme vysavačem či zameteme, nábytek vrátíme na své místo. Po dohodě můžeme samozřejmě zajistit kompletní úklid po montáži, aby po nás přišla úklidová firma uklidit vše potřebné.",
                                    "Bezpečnostní lepení sklo.",
                                    "Bezpečnostní lepení sklo.",
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
                </FlexCol> */}
            </Wrapper>
            <Atc />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;