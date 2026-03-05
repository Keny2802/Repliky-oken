import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
    title: "Nastavení cookies | Jaroslav Heidinger",
    description: "Nastavení a správa souborů cookies na webových stránkách Jaroslav Heidinger. Informace o typech cookies a možnostech jejich úpravy.",
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