import React from "react";
import Image from "next/image";
import ButtonLink from "../../components/button/ButtonLink";

const AboutCard = ({ cardIdentity, cardContent }) => {
    return (
        <div className="segment">
            <div className="card_header flx-c">
                <h3>
                    {cardIdentity.firstName}
                    <span>{cardIdentity.name}</span>
                </h3>
                <Image
                    className="ab-img_head"
                    src="/img/about/avatar.webp"
                    alt={`Avatar de ${cardIdentity.firstName}`}
                    width={225}
                    height={225}
                    priority={false}
                />
                <p className="profession">{cardIdentity.profession}</p>
            </div>
            <div className="card_content">
                {cardContent.description.map((line, i) => (
                    <p
                        key={i + "ab"}
                        dangerouslySetInnerHTML={{ __html: line }}
                    />
                ))}
            </div>
            <ButtonLink href="/contact">Contactez-moi</ButtonLink>
        </div>
    );
};

export default AboutCard;
