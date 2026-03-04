import {
    Fragment
} from "react";

import Wrapper from "../Wrapper";
import Padding from "../Padding";
import Flex from "../Flex";
import CtaText from "./CtaText";
import Phone from "./Phone";
import Mail from "./Mail";
import Adress from "./Adress";

const ContactHeader = () => {
    return (
        <Fragment>
            <Wrapper
            className="bg-[#f5f2e8] text-black border-b border-gray-200"
            id="kontaktni-navigace">
                <Padding>
                    <Flex className="md:justify-between items-start lg:items-center flex-col lg:flex-row">
                        <Flex>
                            <CtaText />
                            <Phone />
                        </Flex>
                        <Mail />
                        <Adress />
                    </Flex>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default ContactHeader;