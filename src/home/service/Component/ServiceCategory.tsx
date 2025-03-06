import React, { memo } from "react";
import { ServiceCategoryProps } from "./interface";
import ServiceItem from "./ServiceItem";
import ServiceBanner from "./ServiceBanner";

const ServiceCategory = ({
    id,
    title,
    subtitle,
    intro,
    services,
}: ServiceCategoryProps) => {
    return (
        <div className="services content-wrapper content-srv" id={id}>
            <div className="segment segment-title">
                <h2 className="card_title">{title}</h2>
            </div>
            <div className="segment">
                <div className="card_header flx-c">
                    <p>
                        {subtitle}
                        <br />
                        <span>{intro}</span>
                    </p>
                </div>
                <div className="card_content">
                    <ServiceBanner title={title} />

                    {services.map((service, index) => (
                        <ServiceItem
                            key={`${index}-service-${title}`}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(ServiceCategory);
