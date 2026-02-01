import {
    Fragment
} from "react";
import {
    PhoneIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Flex from "../Flex";
import Icon from "../Icon";

const Phone = () => {
    return (
        <Fragment>
            <Link
            href="tel:+420604197497">
                <Flex>
                    <Icon>
                        <PhoneIcon />
                    </Icon>
                    +420 604 197 497
                </Flex>
            </Link>
        </Fragment>
    );
};

export default Phone;