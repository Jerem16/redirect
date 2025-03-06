"use client";
import dynamic from "next/dynamic";
const DrivingProvider = dynamic(
    () => import("../src/utils/context/DrivingContext"),
    {
        ssr: false,
        loading: () => <div>Chargement des services...</div>,
    }
);
const ServicesLazy = dynamic(() => import("../src/home/service/services"), {
    ssr: false,
    loading: () => <div>Chargement des services...</div>,
});
const ContactHomeLazy = dynamic(() => import("../src/home/contact-section"), {
    ssr: false,
    loading: () => <div>Chargement du contact...</div>,
});

export default function Home() {
    return (
        <DrivingProvider>
            <section className="section" id="services">
                <div className="fixed-menu"></div>
                <ServicesLazy />
            </section>
            <section className="section" id="contact">
                <div className="fixed-menu"></div>
                <ContactHomeLazy />
            </section>
        </DrivingProvider>
    );
}
