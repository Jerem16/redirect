"use client";
import { useEffect } from "react";
import { useScrollContext } from "../src/utils/context/ScrollContext";
import {
    scrollInView,
    addNewUrl,
    updateSectionClasses,
} from "../src/utils/fnScrollUtils";

export const useScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const worker = new Worker(
            new URL("../public/workers/scrollWorker.js", import.meta.url)
        );

        // Pré-calculer la position des sections (car le Worker ne peut pas accéder au DOM)
        const positions = sections.reduce((acc, { id }) => {
            const section = document.getElementById(id);
            if (section) {
                acc[id] = {
                    top: section.offsetTop,
                    height: section.offsetHeight,
                };
            }
            return acc;
        }, {});

        const handleScroll = () => {
            worker.postMessage({
                sections,
                scrollY: window.scrollY,
                positions,
            });
        };

        worker.onmessage = (event) => {
            const { currentSectionId } = event.data;
            if (currentSectionId) {
                scrollInView(sections);
                addNewUrl(currentSectionId);
                updateSectionClasses(sections, setActiveSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            worker.terminate();
        };
    }, [sections, setActiveSection]);
};
