import {
    ReactNode,
    Fragment
} from "react";
import {
    motion
} from "motion/react";
import Link from "next/link";
import clsx from "clsx";

type props = {
    className?: string;
    href: string;
    children: ReactNode;
};

const DottedButton = (props: props) => {
    const {
        className,
        href,
        children
    } = props;

    return (
        <Fragment>
            <motion.div
            initial={{
                y: 0
            }}
            whileHover={{
                y: -12,
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 350,
                    ease: "easeInOut"
                }
            }}>
                <Link
                href={href}
                target="_blank"
                className={clsx(className, "bg-white text-black border-2 border-dashed border-black w-full md:min-w-75 md:max-w-100 text-base md:text-lg lg:text-[19px] rounded-3xl p-3 md:p-4 lg:p-4.5 transition-all duration-300 ease-in-out hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none dotted-button-component")}>
                    {children}
                </Link>
            </motion.div>
        </Fragment>
    );
};

export default DottedButton;