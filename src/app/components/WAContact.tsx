import {
    Fragment
} from "react";
import {
    ChevronUpIcon
} from "lucide-react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Cta from "./Cta";
import Img from "./Img";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

const WAContact = ({ className }: {
    className?: string;
}) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, "wa-contact-component")}>
                <Wrapper className="bg-white border-2 border-gray-200 p-4 rounded-full fixed bottom-28 right-4 z-[100]">
                    <Cta
                    href="kontaktni-navigace"
                    onClick={(e) => setLinkWithoutHash(e, "kontaktni-navigace")}>
                        <ChevronUpIcon
                        width={45}
                        height={45}
                        />
                    </Cta>
                </Wrapper>
                <Wrapper className="bg-white border-2 border-gray-200 p-4 rounded-full fixed right-4 bottom-4 z-[100]">
                    <Cta
                    href="https://wa.me/420604197497"
                    target="_blank">
                        <Img
                        width={45}
                        height={45}
                        src="/assets/whatsapp-icon.svg"
                        alt="Whatsapp ikonka"
                        />
                    </Cta>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default WAContact;