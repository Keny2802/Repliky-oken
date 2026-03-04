import {
    Fragment
} from "react";
import {
    MapPin
} from "lucide-react";

import Flex from "../Flex";
import Icon from "../Icon";

const Adress = () => {
    return (
        <Fragment>
            <Flex className="items-center">
                <Icon className="mt-2">
                    <MapPin />
                </Icon>
                <p className="text-base md:text-[16.5px] lg:text-[17px]">
                    Praha 10, Na Zájezdu 2131/9, 101 00, Vinohrady
                </p>
            </Flex>
        </Fragment>
    );
};

export default Adress;