import {
    Fragment
} from "react";
import {
    EnvelopeIcon,
    PhoneArrowUpRightIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon";
import Cta from "./Cta";
import Padding from "./Padding";

const ContactInfo = () => {
    return (
        <Fragment>
            <Wrapper className="p-3.5 md:p-4 lg:p-4.5 w-full md:w-4/10 min-h-100 bg-white/10 rounded-md">
                <Wrapper className="mt-3 md:mt-3 5 lg:mt-4 flex justify-center items-center flex-col gap-3 md:gap-3 5 lg:gap-4">
                    <h3 className="text-2xl md:text-3xl font-medium">
                        Ing. Jaroslav Heindinger
                    </h3>
                    <Link
                    href="mailto:heidinger@replikyoken.cz">
                        <Flex>
                            <Icon>
                                <EnvelopeIcon className="text-white" />
                            </Icon>
                            heidinger@replikyoken.cz
                        </Flex>
                    </Link>
                    <Link
                    href="tel:+420604197497">
                        <Flex>
                            <Icon>
                                <PhoneArrowUpRightIcon className="text-white" />
                            </Icon>
                            +420 604 197 497
                        </Flex>
                    </Link>
                    <Link
                    href="https://www.google.com/maps/dir/50.102474,14.5027632/Na+Z%C3%A1jezdu+2131%2F9,+101+00+Vinohrady"
                    target="_blank">
                        Praha 10, Na Zájezdu 2131/9, 101 00, Vinohrady
                    </Link>
                    <p className="text-base">
                        Pondělí - Pátek 08:00 - 16:00
                    </p>
                    <p className="text-base">
                        IČO 87 42 43 47, nejsem plátce DPH
                    </p>
                    <Cta
                    href="tel:+420604197497"
                    className="block mt-3 md:mt-3.5 lg:mt-4 bg-[#322e2e] text-white">
                        <Padding>
                            Zavolejte ještě dnes
                        </Padding>
                    </Cta>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;