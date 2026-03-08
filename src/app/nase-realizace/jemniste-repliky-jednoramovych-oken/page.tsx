import {
    Fragment
} from "react";
import type {
    Metadata
} from "next";

import Content from "./Content";

export const metadata:Metadata = {};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;