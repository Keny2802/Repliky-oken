import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import Padding from "../components/Padding";

const Atc = () => {
    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-8 bg-[#322e2e] text-white text-center  flex justify-center items-center flex-col gap-3 md:gap-6 lg:gap-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-6xl">
                    Potřebujete nová okna do domu nebo bytu?
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl max-w-2xl">
                    Kvalitní, precizní a přesně na míru - ať vaše okna vypadají jako nová.
                </p>
                <Link href="#nabidka"
                className="w-full md:min-w-75 md:max-w-100 bg-white text-black text-base md:text-lg lg:text-[19px] rounded-3xl">
                    <Padding>
                        Zjistit více
                    </Padding>
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Atc;