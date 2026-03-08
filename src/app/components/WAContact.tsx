"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    ChevronUpIcon,
    ChevronDownIcon
} from "lucide-react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Cta from "./Cta";
import Img from "./Img";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

const WAContact = ({ className }: {
    className?: string;
}) => {
    const [isLoading, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const setLoading = () => {
            if (window.scrollY > 0) {
                setLoaded(true);
            } else {
                setLoaded(false);
            };
        };

        window.addEventListener("scroll", setLoading);

        return () => {
            window.removeEventListener("scroll", setLoading);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper className={clsx(className, "wa-contact-component")}>
                <Wrapper className="bg-white border-2 border-gray-200 p-4 rounded-full fixed bottom-28 right-4 z-[100]">
                    <Cta
                    href={isLoading ? "kontaktni-navigace" : "footer"}
                    onClick={(e) => {
                        if (isLoading) {
                            setLinkWithoutHash(e, "kontaktni-navigace");
                        } else {
                            setLinkWithoutHash(e, "footer");
                        };
                    }}
                    className="transition-all duration-300 ease-in-out">
                        {
                            isLoading ? (
                                <ChevronUpIcon
                                width={45}
                                height={45}
                                />
                            ) : (
                                <ChevronDownIcon
                                width={45}
                                height={45}
                                />
                            )
                        }
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