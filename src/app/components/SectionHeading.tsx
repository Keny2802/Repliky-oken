import {
    ReactNode,
    Fragment
} from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <h3 className="text-2xl md:text-[28px] font-bold">
                {children}
            </h3>
        </Fragment>
    );
};

export default SectionHeading;