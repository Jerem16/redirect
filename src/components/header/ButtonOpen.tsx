import React from "react";
import { Menu, X } from "lucide-react";
import { useNavigation } from "../../utils/context/NavigationContext";

const ButtonOpen = () => {
    const {
        hamburgerMenuIsOpen,
        openHamburgerMenu,
        closeHamburgerMenu,
    } = useNavigation();
    return (
        <button
            aria-label="ouvrir le menu"
            onClick={
                hamburgerMenuIsOpen
                    ? () => closeHamburgerMenu(1)
                    : openHamburgerMenu
            }
            className="menu"
        >
            {hamburgerMenuIsOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
};

export default React.memo(ButtonOpen);
