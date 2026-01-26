import {
    Fragment
} from "react";
import {
    Points
} from "../jak-to-probiha/Points";

import Wrapper from "../components/Wrapper";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Padding from "./Padding";

const HowItWorks = () => {
    return (
        <Fragment>
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <Heading>
                    Průběh spolupráce
                </Heading>
                <Subheading>
                    Podívejte se, jak probíhá výroba a montáž našich oken a dveří krok za krokem.
                </Subheading>
                <Wrapper className="mt-4 md:mt-5 lg:mt-6 grid grid-cols-1 md:grid-cols-2 items-center gap-2.5 md:gap-4 lg:gap-6">
                    {Points.map((point, index) => {
                        return (
                            <Fragment key={index}>
                                {/* <Wrapper className="md:w-[3px] md:h-[15px] md:bg-black"></Wrapper> */}
                                <Wrapper className="bg-white shadow-lg border border-gray-200 rounded-2xl">
                                    <Padding>
                                        <Wrapper className="flex justify-between md:tems-center md:flex-row flex-col">
                                            <p className="text-2xl md:text-3xl font-extrabold">
                                                {index + 1}
                                            </p>
                                            <h3 className="text-xl md:text-2xl font-bold">
                                                {point.title}
                                            </h3>
                                        </Wrapper>
                                        <Padding>
                                            <ul className="mt-2 md:mt-4 lg:mt-6 text-base md:text-[17px]">
                                                {
                                                    Array.isArray(point.desc) ? (
                                                        point.desc.map((desc, index) => {
                                                            return (
                                                                <li className="list-disc point-item"
                                                                key={index}>
                                                                    {desc}
                                                                </li>
                                                            );
                                                    })
                                                    ) : (
                                                        <li className="list-disc point-item">
                                                            {point.desc}
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </Padding>
                                    </Padding>
                                </Wrapper>
                                {/* <Wrapper className="md:w-[3px] md:h-[15px] md:bg-black"></Wrapper> */}
                            </Fragment>
                        );
                    })}
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default HowItWorks;