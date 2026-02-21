"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    useScroll,
    useMotionValueEvent,
    motion
} from "motion/react";
import {
    Menu,
    XIcon
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import Padding from "./Padding";
import Flex from "./Flex";
import Logo from "./Logo";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";

type HeaderType = {
    className?: string;
};

const Header = ({ ...props }: HeaderType) => {
    const {
        className
    } = props;

    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false);
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false);
    
    const {
        scrollY
    } = useScroll();
    const animate = {
        y: isHeaderHidden ? -140 : 0,
        opacity: isHeaderHidden ? 0 : 1
    };

    useEffect(() => {
        const setScrollHeader = () => {
            if (window.scrollY > 0) {
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            };
        };

        window.addEventListener("scroll", setScrollHeader);

        return () => {
            window.removeEventListener("scroll", setScrollHeader);
        };
    }, []);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previousPosition = scrollY.getPrevious() ?? 0;

        if (current > previousPosition && current > 150) {
            setHeaderHidden(true);
        } else {
            setHeaderHidden(false);
        };
    });

    return (
        <Fragment>
            <motion.header
            animate={animate}
            transition={{
                duration: 0.35,
                ease: "easeInOut"
            }}
            className={clsx(className, isHeaderScrolled && "fixed top-0", `w-full bg-[#f5f2e8] text-black shadow-lg border-b border-gray-200 z-50 header-component`)}>
                <Padding>
                    <Flex className="justify-between">
                        <Logo />
                        <ul className="hidden md:block header-list">
                            <Flex>
                                {
                                    [
                                        {
                                            text: "Jak to probíhá",
                                            href: "/jak-to-probiha"
                                        },
                                        // {
                                        //     text: "Galerie",
                                        //     href: "/galerie"
                                        // },
                                        {
                                            text: "Naše realizace",
                                            href: "/nase-realizace"
                                        },
                                        {
                                            text: "O nás",
                                            href: "/o-nas"
                                        },
                                        {
                                            text: "Kontakt",
                                            href: "/kontakt"
                                        }
                                    ].map((link, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <li className="text-base md:text-[17px] lg:text-lg header-item">
                                                    <Link
                                                    href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                            </Flex>
                        </ul>
                        {
                            isMobileMenu === false ? (
                                <Icon
                                className="md:hidden cursor-pointer"
                                onClick={() => {
                                    setMobileMenu(prev => !prev);
                                }}>
                                    <Menu />
                                </Icon>
                            ) : (
                                <Icon
                                className="md:hidden cursor-pointer"
                                onClick={() => {
                                    setMobileMenu(false);
                                }}>
                                    <XIcon />
                                </Icon>
                            )
                        }
                    </Flex>
                </Padding>
            </motion.header>
            {
                isMobileMenu && (
                    <MobileMenu
                    isMobileMenu={isMobileMenu}
                    setMobileMenu={setMobileMenu}
                    />
                )
            }
        </Fragment>
    );
};

export default Header;