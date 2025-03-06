import React, { memo } from "react";
import Image from "next/image";
import { ServiceItemProps } from "./interface";

const ServiceItem = ({ title, imgSrc, imgAlt }: ServiceItemProps) => (
    <div className="flx-c srv-description">
        <a href="./services#top" target="_blank" rel="noopener noreferrer">
            {title}
        </a>
        <div className="flx-c icon-description">
            <Image
                className="srv-aside-bg"
                src={imgSrc}
                alt={imgAlt}
                width={1145}
                height={1145}
                loading="lazy"
                priority={false}
            />
        </div>
    </div>
);
export default memo(ServiceItem);
