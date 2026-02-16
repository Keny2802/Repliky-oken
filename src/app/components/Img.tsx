import {
  Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type ImageType = {
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    src: string;
    alt: string;
    loading?: "eager" | "lazy";
    style?: React.CSSProperties;
};

const Img = ({ ...props }: ImageType) => {
    const {
        className,
        fill,
        width,
        height,
        src,
        alt,
        loading,
        style
    } = props;

    return (
        <Fragment>
            <Image
            {...(fill ?
                { fill: true } : { width, height }
            )}
            src={src}
            alt={alt}
            {
                ...(
                    loading ?
                    { loading: loading } : { loading: "lazy" }
                )
            }
            style={style}
            className={clsx(className, "image-component")}
            />
        </Fragment>
    );
};

export default Img;