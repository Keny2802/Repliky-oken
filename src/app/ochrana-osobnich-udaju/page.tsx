import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Ochrana osobních údajů | Jaroslav Heidinger",
    description: "Zásady ochrany osobních údajů společnosti Jaroslav Heidinger. Informace o zpracování osobních údajů, právech subjektů údajů a ochraně soukromí.",
    robots: {
        index: true,
        follow: true
    }
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;