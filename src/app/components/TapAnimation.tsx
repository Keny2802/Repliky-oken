import {
    ReactNode,
    Fragment
} from "react";
import {
    motion
} from "motion/react";

const initial = {
    scale: 1
};

const whileTap = {
    scale: 0.96
};

const TapAnimation = ({ children } : { children: ReactNode }) => {
    return (
        <Fragment>
            <motion.div
            initial={initial}
            whileTap={whileTap}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
            }}>
                {children}
            </motion.div>
        </Fragment>
    );
};

export default TapAnimation;