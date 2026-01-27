import {
    Fragment
} from "react";
import {
    Gallery as gal
} from "../galerie/Gallery";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import FlexRow from "../components/FlexRow";

const Gallery = () => {
    return (
        <Fragment>
            <Wrapper className="px-8 md:px-12 py-16 md:py-24 bg-white shadow-md">
                <Heading>
                    Fotogalerie
                </Heading>
                <Subheading>
                    Fotogalerie realizací našich klientů.
                </Subheading>
                <FlexRow className="flex-wrap">
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
                                    className="rounded-md"
                                    // w-41.25 h-37.5 object-cover
                                    />
                                </Fragment>
                            );
                        })
                    }
                </FlexRow>
            </Wrapper>
        </Fragment>
    );
};

export default Gallery;