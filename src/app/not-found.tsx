import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./components/Wrapper";;
import Img from "./components/Img";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import FlexRow from "./components/FlexRow";
import Cta from "./components/Cta";
import Back from "./components/Back";

const Content = ({
    className
} : {
    className?: string;
}) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, "relative w-full min-h-screen thank-you-page-component")}>
                <Img
                fill={true}
                src="/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif"
                alt="Bohužel tady nic nenajdete, stránka nebyla nalezena. Doporučujeme se vrátit na domovskou stránku webu replikyoken.cz Jaroslava Heidingera."
                className="object-cover"
                />
                <Wrapper className="bg-black/40 absolute inset-0"></Wrapper>
                <Wrapper className="absolute inset-0 flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center text-white">
                    <Wrapper className="max-w-[450px] md:max-w-[600px]">
                        <Heading>
                            404 nenalezeno, slepé místo.
                        </Heading>
                        <Subheading>
                            Bohužel tady nic nenajdete, stránka nebyla nalezena. Doporučujeme se vrátit na domovskou stránku.
                        </Subheading>
                    </Wrapper>
                    <FlexRow>
                        <Cta
                        href="/"
                        className="p-3 md:p-4 lg:p-4.5 bg-white text-black">
                            Domovská stránka
                        </Cta>
                        <Back>
                            Zpátky
                        </Back>
                    </FlexRow>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Content;