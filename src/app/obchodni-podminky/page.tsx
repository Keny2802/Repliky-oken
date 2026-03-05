import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Obchodní podmínky | Jaroslav Heidinger",
    description: "Obchodní podmínky společnosti Jaroslav Heidinger. Podmínky poskytování služeb, práva a povinnosti smluvních stran.",
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