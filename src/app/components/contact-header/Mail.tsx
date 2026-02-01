import {
    Fragment
} from "react";
import {
    EnvelopeIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

import Flex from "../Flex";
import Icon from "../Icon";

const Mail = () => {
    return (
        <Fragment>
            <Link
            href="mailto:heidinger@replikyoken.cz">
                <Flex>
                    <Icon>
                        <EnvelopeIcon />
                    </Icon>
                    heidinger@replikyoken.cz
                </Flex>
            </Link>
        </Fragment>
    );
};

export default Mail;