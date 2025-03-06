import { aboutContent } from "../../assets/data/content/about";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="about content-wrapper flx-c">
            <div className="ab-img_info">
                <img
                    src="/img/about/INFO.svg"
                    alt="Info Icon"
                    width="540"
                    height="540"
                />
            </div>
            {aboutContent.map((content, index) => (
                <AboutCard
                    key={index + "about"}
                    cardIdentity={content.cardIdentity}
                    cardContent={content.cardContent}
                />
            ))}
        </div>
    );
};

export default About;
