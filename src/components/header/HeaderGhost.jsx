import LogoLink from "./LogoLink";
import { Menu } from "lucide-react";
const HeaderGhost = () => {
    return (
        <div className="header">
            <LogoLink />
            <button aria-label="ouvrir le menu" className="menu">
                <Menu size={24} />
            </button>
            <div className="head-flex absolute "></div>
        </div>
    );
};

export default HeaderGhost;
