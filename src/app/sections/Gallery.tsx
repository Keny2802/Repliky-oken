import {
    Fragment
} from "react";
import {
    Gallery as gal
} from "../galerie/Gallery";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import FlexRow from "../components/FlexRow";

const Gallery = () => {
    return (
        <Fragment>
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <FlexCol className="items-center">
                    <Heading>
                        Fotogalerie
                    </Heading>
                    <Subheading>
                        Fotogalerie realizací našich klientů.
                    </Subheading>
                </FlexCol>
                <Wrapper className="mt-2 md:mt-4 lg:mt-6 flex justify-center items-center md:flex-row flex-col flex-wrap gap-2 md:gap-4 lg:gap-6">
                    {
                        gal.map((card, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={300}
                                    height={150}
                                    src={card.image}
                                    alt={card.alt || `${index + 1}. Ukázka realizace replikyoken.cz Jaroslav Heindingera`}
                                    draggable={false}
                                    className="w-full md:w-50 md:h-50 object-cover rounded-md cursor-pointer"
                                    />
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Gallery;